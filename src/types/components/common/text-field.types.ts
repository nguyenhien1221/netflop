import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerClassName?: string;
}
