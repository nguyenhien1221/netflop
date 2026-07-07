/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { baseSepolia } from "wagmi/chains";
import {
  useConnect,
  useConnection,
  useConnectors,
  useDisconnect,
  useSwitchChain,
} from "wagmi";
import { useWalletStore } from "@/stores/useWalletStore";
import toast from "react-hot-toast";
import { useGetBalance } from "./useGetBalance";

export const useWalletConnect = () => {
  const { address, chainId: walletChainId, isConnected } = useConnection();
  const balance = useGetBalance(address);

  const { mutateAsync: connectAsync, isPending: isConnecting } = useConnect();
  const { mutateAsync: switchChainAsync, isPending: isSwitchingChain } =
    useSwitchChain();
  const { mutateAsync: disconnectAsync, isPending: isDisconnecting } =
    useDisconnect();
  const connectors = useConnectors();
  const syncConnection = useWalletStore((state) => state.syncConnection);

  useEffect(() => {
    if (!isConnected || walletChainId === baseSepolia.id) return;

    switchChainAsync({ chainId: baseSepolia.id });
  }, [isConnected]);

  useEffect(() => {
    syncConnection(isConnected ? (address ?? null) : null);
  }, [address, isConnected, syncConnection]);

  const handleConnectWallet = async () => {
    try {
      const activeConnector = connectors[0];
      if (!activeConnector) return;

      await connectAsync({ connector: activeConnector });
      toast.success("Wallet connected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnectWallet = () => {
    try {
      disconnectAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    balance,
    address,
    chainId: walletChainId,
    isConnected,
    isConnecting,
    isSwitchingChain,
    isDisconnecting,
    handleConnectWallet,
    handleDisconnectWallet,
  };
};
