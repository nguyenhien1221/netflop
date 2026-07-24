import { Loader2 } from "lucide-react";
import { parseUnits } from "viem";
import toast from "react-hot-toast";
import Button from "@/components/common/Button";
import { usePurchaseMovie } from "@/hooks/usePurchaseMovie";
import { useWalletConnect } from "@/hooks/useWalletConnect";
import type { BuyMovieButtonProps } from "@/types/components/watch/buy-movie-button.types";
import { formatTokenAmount } from "@/utils/helper";

const purchaseStepLabels = {
  transferring: "Confirm transfer in wallet...",
  confirming: "Waiting for confirmation...",
  verifying: "Verifying purchase...",
} as const;

const BuyMovieButton = ({ movie }: BuyMovieButtonProps) => {
  const { isConnected, isConnecting, handleConnectWallet, balance } =
    useWalletConnect();
  const { purchaseMovie, isPurchasing, purchaseStep } = usePurchaseMovie();

  const handlePurchase = () => {
    if (movie.price === null) return;

    if (!balance.decimals || balance.balance === undefined) {
      toast.error("Unable to read token balance");
      return;
    }

    const transferAmount = parseUnits(
      movie.price?.toString() ?? "0",
      balance.decimals,
    );
    const userBalance = parseUnits(balance.balance, balance.decimals);

    if (userBalance < transferAmount) {
      toast.error("Insufficient token balance");
      return;
    }

    void purchaseMovie(movie);
  };

  if (!isConnected) {
    return (
      <Button
        variant="primary"
        size="md"
        disabled={isConnecting}
        onClick={() => {
          void handleConnectWallet();
        }}
      >
        {isConnecting ? "Connecting..." : "Connect wallet to buy"}
      </Button>
    );
  }

  const stepLabel =
    purchaseStep !== "idle"
      ? purchaseStepLabels[purchaseStep]
      : `Buy for ${formatTokenAmount(movie.price)} ${movie.currency}`;

  return (
    <Button
      variant="primary"
      size="md"
      disabled={isPurchasing || movie.price === null}
      onClick={handlePurchase}
    >
      {isPurchasing ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          {stepLabel}
        </span>
      ) : (
        stepLabel
      )}
    </Button>
  );
};

export default BuyMovieButton;
