import { Button as RadixButton } from "@radix-ui/themes";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import type { ButtonProps, ButtonSize, ButtonVariant } from "@/types/components/common/button.types";

const variantConfig: Record<
  ButtonVariant,
  Pick<ComponentPropsWithoutRef<typeof RadixButton>, "variant" | "color">
> = {
  primary: { variant: "solid", color: "blue" },
  secondary: { variant: "soft", color: "gray" },
  outline: { variant: "outline", color: "gray" },
  ghost: { variant: "ghost", color: "gray" },
  destructive: { variant: "solid", color: "red" },
};

const sizeConfig: Record<
  ButtonSize,
  ComponentPropsWithoutRef<typeof RadixButton>["size"]
> = {
  sm: "1",
  md: "2",
  lg: "3",
};

const sizeClassConfig: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const { variant: radixVariant, color } = variantConfig[variant];

    return (
      <RadixButton
        ref={ref}
        variant={radixVariant}
        color={color}
        size={sizeConfig[size]}
        className={clsx("cursor-pointer!", sizeClassConfig[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
