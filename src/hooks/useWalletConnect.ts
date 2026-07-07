/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { baseSepolia } from "wagmi/chains";
import {
  useConnect,
  useConnection,
  useConnectors,
  useDisconnect,
  useSignMessage,
  useSwitchChain,
} from "wagmi";
import { useWalletStore } from "@/stores/useWalletStore";
import toast from "react-hot-toast";
import { useGetBalance } from "./useGetBalance";

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
  const balance = useGetBalance(
    isConnected && storeAddress ? (storeAddress as `0x${string}`) : undefined,
  );

  const { mutateAsync: connectAsync, isPending: isConnecting } = useConnect();
  const { mutateAsync: signMessageAsync, isPending: isSigningMessage } =
    useSignMessage();
  const { mutateAsync: switchChainAsync, isPending: isSwitchingChain } =
    useSwitchChain();
  const { mutateAsync: disconnectAsync, isPending: isDisconnecting } =
    useDisconnect();
  const connectors = useConnectors();

  useEffect(() => {
    if (!isWalletConnected || walletChainId === baseSepolia.id) return;

    switchChainAsync({ chainId: baseSepolia.id });
  }, [isWalletConnected]);

  useEffect(() => {
    if (!isWalletConnected) {
      disconnect();
      return;
    }

    if (
      isConnected &&
      walletAddress &&
      storeAddress &&
      walletAddress !== storeAddress
    ) {
      disconnect();
    }
  }, [walletAddress, isWalletConnected, isConnected, storeAddress, disconnect]);

  const handleConnectWallet = async () => {
    try {
      let connectedAddress = walletAddress;

      if (!isWalletConnected) {
        const activeConnector = connectors[0];
        if (!activeConnector) return;

        const result = await connectAsync({ connector: activeConnector });
        connectedAddress = result.accounts[0];
      }

      if (!connectedAddress) return;

      await signMessageAsync({
        message: "nonce: sign message",
        account: connectedAddress,
      });

      connect(connectedAddress);
      toast.success("Wallet connected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnectAsync();
      disconnect();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    balance,
    address: isConnected ? storeAddress : null,
    chainId: walletChainId,
    isConnecting: isConnecting || isSwitchingChain || isSigningMessage,
    isConnected,
    isDisconnecting: isDisconnecting,
    handleConnectWallet,
    handleDisconnectWallet,
  };
};
