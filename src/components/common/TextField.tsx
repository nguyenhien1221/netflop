import clsx from "clsx";
import { forwardRef } from "react";
import type { TextFieldProps } from "@/types/components/common/text-field.types";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ startIcon, endIcon, className, containerClassName, ...props }, ref) => {
    return (
      <div className={clsx("relative min-w-0", containerClassName)}>
        {startIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {startIcon}
          </span>
        )}

        <input
          ref={ref}
          className={clsx(
            "h-9 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#c084fc]/50 focus:bg-white/[0.07]",
            startIcon ? "pl-9" : "pl-3",
            endIcon ? "pr-9" : "pr-3",
            className,
          )}
          {...props}
        />

        {endIcon && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {endIcon}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
