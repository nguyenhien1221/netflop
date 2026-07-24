import { useCallback, useEffect, useRef, useState } from "react";
import { baseSepolia } from "wagmi/chains";
import {
  useConnect,
  useConnection,
  useConnectors,
  useDisconnect,
  useSignMessage,
  useSwitchChain,
} from "wagmi";
import { UserRejectedRequestError } from "viem";
import { useWalletStore } from "@/stores/useWalletStore";
import { useUserStore } from "@/stores/useUserStore";
import toast from "react-hot-toast";
import { useGetBalance } from "./useGetBalance";
import { getNonce, login } from "@/services/auth/getNonce";
import { getErrorMessage } from "@/utils/error.utils";

export const useWalletConnect = () => {
  const {
    address: walletAddress,
    chainId: walletChainId,
    isConnected: isWalletConnected,
  } = useConnection();
  const storeAddress = useWalletStore((state) => state.address);
  const isConnected = useWalletStore((state) => state.isConnected);
  const connect = useWalletStore((state) => state.connect);
  const disconnect = useWalletStore((state) => state.disconnect);
  const setUserDetail = useUserStore((state) => state.setUserDetail);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const clearUser = useUserStore((state) => state.clearUser);
  const balance = useGetBalance(
    isConnected && storeAddress ? (storeAddress as `0x${string}`) : undefined,
  );

  const { mutateAsync: connectAsync, isPending: isConnectingWallet } =
    useConnect();
  const { mutateAsync: signMessageAsync, isPending: isSigningMessage } =
    useSignMessage();
  const { mutateAsync: switchChainAsync, isPending: isSwitchingChain } =
    useSwitchChain();
  const { mutateAsync: disconnectAsync, isPending: isDisconnecting } =
    useDisconnect();
  const connectors = useConnectors();
  const isConnectingRef = useRef(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const shouldResetSession =
      !isWalletConnected ||
      (isConnected &&
        walletAddress &&
        storeAddress &&
        walletAddress !== storeAddress);

    if (shouldResetSession) {
      disconnect();
      clearUser();
    }
  }, [
    walletAddress,
    isWalletConnected,
    isConnected,
    storeAddress,
    disconnect,
    clearUser,
  ]);

  const handleConnectWallet = useCallback(async () => {
    if (isConnectingRef.current) return;
    isConnectingRef.current = true;

    try {
      let address: `0x${string}` | null = null;
      let chainId: number | undefined;

      if (isWalletConnected && walletAddress) {
        address = walletAddress;
        chainId = walletChainId;
      } else {
        // TODO: Support multi-wallet connector selection; using first available connector for now
        const activeConnector = connectors[0];
        if (!activeConnector) {
          toast.error("No wallet connector available");
          return;
        }

        try {
          const result = await connectAsync({ connector: activeConnector });
          address = result.accounts[0] ?? null;
          chainId = result.chainId;
        } catch (error) {
          if (error instanceof UserRejectedRequestError) {
            toast.error("Wallet connection cancelled");
            return;
          }

          toast.error(getErrorMessage(error, "Failed to connect wallet"));
          return;
        }
      }

      if (!address) return;

      const activeChainId = chainId ?? walletChainId;
      if (activeChainId !== baseSepolia.id) {
        try {
          await switchChainAsync({ chainId: baseSepolia.id });
        } catch (error) {
          if (error instanceof UserRejectedRequestError) {
            toast.error("Chain switch cancelled");
            return;
          }

          toast.error(getErrorMessage(error, "Failed to switch network"));
          return;
        }
      }

      let message: string;
      try {
        message = await getNonce(address);
      } catch (error) {
        toast.error(getErrorMessage(error, "Failed to get nonce"));
        return;
      }

      let signature: string;
      try {
        signature = await signMessageAsync({ account: address, message });
      } catch (error) {
        if (error instanceof UserRejectedRequestError) {
          toast.error("Signature rejected");
          return;
        }

        toast.error(getErrorMessage(error, "Failed to sign message"));
        return;
      }

      setIsLoggingIn(true);
      let user;
      let token: string | null = null;
      try {
        const response = await login(address, signature);
        user = response.user;
        token = response.accessToken;
      } catch (error) {
        toast.error(getErrorMessage(error, "Login failed"));
        return;
      } finally {
        setIsLoggingIn(false);
      }

      if (!user) return;

      connect(address);
      setUserDetail(user);
      setAccessToken(token);
      toast.success("Wallet connected");
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      isConnectingRef.current = false;
    }
  }, [
    isWalletConnected,
    walletAddress,
    walletChainId,
    connectors,
    connectAsync,
    switchChainAsync,
    signMessageAsync,
    connect,
    setUserDetail,
    setAccessToken,
  ]);

  const handleDisconnectWallet = useCallback(async () => {
    try {
      await disconnectAsync();
      disconnect();
      clearUser();
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to disconnect wallet"));
    }
  }, [disconnectAsync, disconnect, clearUser]);

  return {
    balance,
    address: isConnected ? storeAddress : null,
    chainId: walletChainId,
    isConnecting:
      isConnectingWallet || isSwitchingChain || isSigningMessage || isLoggingIn,
    isConnected,
    isDisconnecting,
    handleConnectWallet,
    handleDisconnectWallet,
  };
};
