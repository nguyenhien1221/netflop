export const truncateAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

export const formatTokenAmount = (
  balance: string | number | null | undefined,
  decimals: number = 2,
) => {
  if (!balance) return "—";

  const num = typeof balance === "number" ? balance : parseFloat(balance);
  if (isNaN(num)) return "—";

  return num.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatTokenBalance = (
  balance: string | number | null | undefined,
  symbol: string | undefined,
  decimals = 2,
) => {
  const formatted = formatTokenAmount(balance, decimals);
  if (formatted === "—") return formatted;

  return symbol ? `${formatted} ${symbol}` : formatted;
};
