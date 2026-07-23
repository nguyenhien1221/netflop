import { DropdownMenu as RadixDropdownMenu } from "@radix-ui/themes";
import clsx from "clsx";
import type {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuProps,
  DropdownMenuSeparatorProps,
  DropdownMenuTriggerProps,
} from "@/types/components/common/dropdown-menu.types";

const DropdownMenuRoot = ({ children, ...props }: DropdownMenuProps) => (
  <RadixDropdownMenu.Root {...props}>{children}</RadixDropdownMenu.Root>
);

const DropdownMenuTrigger = ({
  children,
  ...props
}: DropdownMenuTriggerProps) => (
  <RadixDropdownMenu.Trigger {...props}>{children}</RadixDropdownMenu.Trigger>
);

const DropdownMenuContent = ({
  align = "end",
  sideOffset = 8,
  className,
  children,
  ...props
}: DropdownMenuContentProps) => (
  <RadixDropdownMenu.Content
    align={align}
    sideOffset={sideOffset}
    className={clsx(
      "min-w-[160px] border border-white/10 bg-[#0F172A] shadow-lg",
      className,
    )}
    {...props}
  >
    {children}
  </RadixDropdownMenu.Content>
);

const DropdownMenuItem = ({
  className,
  children,
  ...props
}: DropdownMenuItemProps) => (
  <RadixDropdownMenu.Item
    className={clsx("cursor-pointer!", className)}
    {...props}
  >
    {children}
  </RadixDropdownMenu.Item>
);

const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <RadixDropdownMenu.Separator
    className={clsx("bg-white/10", className)}
    {...props}
  />
);

const DropdownMenuLabel = ({
  className,
  children,
  ...props
}: DropdownMenuLabelProps) => (
  <RadixDropdownMenu.Label className={className} {...props}>
    {children}
  </RadixDropdownMenu.Label>
);

const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Label: DropdownMenuLabel,
});

export default DropdownMenu;
