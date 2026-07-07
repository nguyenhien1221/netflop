import { useReadContracts } from "wagmi";
import { erc20Abi, formatUnits } from "viem";
import { contractAddress } from "@/constants/enviroment.constant";
import { formatTokenAmount } from "@/utils/helper";
import { useMemo } from "react";

export const useGetBalance = (walletAddress?: `0x${string}`) => {
  const { data, isLoading, isError } = useReadContracts({
    contracts: [
      {
        address: contractAddress,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [walletAddress!],
      },
      {
        address: contractAddress,
        abi: erc20Abi,
        functionName: "decimals",
      },
      {
        address: contractAddress,
        abi: erc20Abi,
        functionName: "symbol",
      },
    ],
    query: {
      enabled: !!walletAddress,
    },
  });

  const formattedBalance = useMemo(() => {
    const rawBalance = data?.[0]?.result;
    const decimals = data?.[1]?.result;

    const balance =
      rawBalance !== undefined && decimals !== undefined
        ? formatUnits(rawBalance as bigint, decimals as number)
        : undefined;

    return {
      balance,
      formattedAmount: formatTokenAmount(balance, 2),
      decimals: decimals as number | undefined,
      symbol: data?.[2]?.result as string | undefined,
      isLoading,
      isError,
    };
  }, [data, isLoading, isError]);

  return {
    ...formattedBalance,
    isLoading,
    isError,
  };
};
