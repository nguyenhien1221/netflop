import { useCallback, useState } from "react";
import { usePublicClient, useWriteContract } from "wagmi";
import { erc20Abi, parseUnits, UserRejectedRequestError } from "viem";
import toast from "react-hot-toast";
import {
  adminWalletAddress,
  contractAddress,
} from "@/constants/enviroment.constant";
import { usePurchaseMovieMutation } from "@/services/movies/purchaseMovie";
import { useUserStore } from "@/stores/useUserStore";
import { useWalletStore } from "@/stores/useWalletStore";
import type { IMovie } from "@/types/movie";
import { getErrorMessage } from "@/utils/error.utils";
import { useGetBalance } from "./useGetBalance";

export type PurchaseStep = "idle" | "transferring" | "confirming" | "verifying";

export const usePurchaseMovie = () => {
  const isConnected = useWalletStore((state) => state.isConnected);
  const storeAddress = useWalletStore((state) => state.address);
  const accessToken = useUserStore((state) => state.accessToken);
  const {
    balance: balanceAmount,
    decimals,
    refetch: refetchBalance,
  } = useGetBalance(
    isConnected && storeAddress ? (storeAddress as `0x${string}`) : undefined,
  );

  const { writeContractAsync, isPending: isWritingContract } =
    useWriteContract();
  const publicClient = usePublicClient();
  const { mutateAsync: purchaseMovieAsync, isPending: isVerifyingPurchase } =
    usePurchaseMovieMutation();
  const [purchaseStep, setPurchaseStep] = useState<PurchaseStep>("idle");

  const purchaseMovie = useCallback(
    async (movie: IMovie) => {
      if (!isConnected || !storeAddress) {
        toast.error("Connect your wallet to purchase");
        return;
      }

      if (!accessToken) {
        toast.error("Please reconnect your wallet to continue");
        return;
      }

      if (movie.price === null) {
        toast.error("This movie is not available for purchase");
        return;
      }

      if (!decimals) {
        toast.error("Unable to read token balance");
        return;
      }

      const transferAmount = parseUnits(
        movie.price?.toString() ?? "0",
        decimals,
      );

      if (balanceAmount !== undefined) {
        const userBalance = parseUnits(balanceAmount, decimals);

        if (userBalance < transferAmount) {
          toast.error("Insufficient token balance");
          return;
        }
      }

      if (!publicClient) {
        toast.error("Unable to connect to network");
        return;
      }

      try {
        setPurchaseStep("transferring");
        const hash = await writeContractAsync({
          address: contractAddress,
          abi: erc20Abi,
          functionName: "transfer",
          args: [adminWalletAddress as `0x${string}`, transferAmount],
        });

        setPurchaseStep("confirming");
        await publicClient.waitForTransactionReceipt({ hash });
        await refetchBalance();

        setPurchaseStep("verifying");
        await purchaseMovieAsync({
          id: movie.id.toString(),
          txHash: hash,
        });

        toast.success("Movie purchased successfully");
      } catch (error) {
        if (error instanceof UserRejectedRequestError) {
          toast.error("Transaction cancelled");
          return;
        }

        toast.error(getErrorMessage(error, "Failed to purchase movie"));
      } finally {
        setPurchaseStep("idle");
      }
    },
    [
      isConnected,
      storeAddress,
      accessToken,
      balanceAmount,
      decimals,
      refetchBalance,
      publicClient,
      writeContractAsync,
      purchaseMovieAsync,
    ],
  );

  const isPurchasing =
    purchaseStep !== "idle" || isWritingContract || isVerifyingPurchase;

  return {
    purchaseMovie,
    isPurchasing,
    purchaseStep,
  };
};
