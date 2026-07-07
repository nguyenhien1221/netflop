import type { DropdownMenu as RadixDropdownMenu } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type DropdownMenuAlign = "start" | "center" | "end";
export type DropdownMenuSide = "top" | "right" | "bottom" | "left";
export type DropdownMenuItemColor = "gray" | "red";

export interface DropdownMenuProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Root
> {
  children: ReactNode;
}

export interface DropdownMenuTriggerProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Trigger
> {
  children: ReactNode;
}

export interface DropdownMenuContentProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Content
> {
  align?: DropdownMenuAlign;
  side?: DropdownMenuSide;
  sideOffset?: number;
  className?: string;
  children: ReactNode;
}

export interface DropdownMenuItemProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Item
> {
  color?: DropdownMenuItemColor;
  children: ReactNode;
}

export interface DropdownMenuSeparatorProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Separator
> {
  className?: string;
}

export interface DropdownMenuLabelProps extends ComponentPropsWithoutRef<
  typeof RadixDropdownMenu.Label
> {
  className?: string;
  children: ReactNode;
}
