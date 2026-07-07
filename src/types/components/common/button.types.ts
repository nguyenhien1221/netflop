import type { Button as RadixButton } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  ComponentPropsWithoutRef<typeof RadixButton>,
  "variant" | "size" | "color"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
