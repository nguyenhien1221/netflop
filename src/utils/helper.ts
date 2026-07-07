export const truncateAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

export const formatTokenAmount = (
  balance: string | undefined,
  maxDecimals = 2,
) => {
  if (!balance) return "—";

  const num = parseFloat(balance);
  if (isNaN(num)) return "—";

  return num.toLocaleString(undefined, {
    maximumFractionDigits: maxDecimals,
  });
};

export const formatTokenBalance = (
  balance: string | undefined,
  symbol: string | undefined,
  maxDecimals = 2,
) => {
  const formatted = formatTokenAmount(balance, maxDecimals);
  if (formatted === "—") return formatted;

  return symbol ? `${formatted} ${symbol}` : formatted;
};
