import clsx from "clsx";
import { Loader2 } from "lucide-react";
import type { PageLoaderProps } from "@/types/components/common/page-loader.types";

const PageLoader = ({
  label,
  fullScreen = true,
  className,
}: PageLoaderProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3",
        fullScreen && "min-h-screen bg-[#0F172A]",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <Loader2 className="size-8 animate-spin text-[#0084ff]" />
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
};

export default PageLoader;
