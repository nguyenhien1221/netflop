import { Lock } from "lucide-react";
import type { PremiumGateSectionProps } from "@/types/components/watch/premium-gate-section.types";

const PremiumGateSection = ({ movie }: PremiumGateSectionProps) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <img
        src={movie.posterUrl}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25 blur-sm"
      />
      <div className="absolute inset-0 bg-[#0F172A]/70" />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
          <Lock size={28} />
        </div>

        <div className="max-w-md space-y-2">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            Premium content
          </h2>
          <p className="text-sm text-white/70 md:text-base">
            <span className="font-medium text-white">{movie.title}</span> is a
            premium title. Connect your wallet to unlock and watch this movie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumGateSection;
