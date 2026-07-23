import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Text } from "@radix-ui/themes";
import clsx from "clsx";
import Button from "@/components/common/Button";
import DropdownMenu from "@/components/common/DropdownMenu";
import TextField from "@/components/common/TextField";
import { NAV_PATH } from "@/constants/nav.constants";
import { useWalletConnect } from "@/hooks/useWalletConnect";
import { truncateAddress } from "@/utils/helper";
import { ChevronDown, Coins, Search } from "lucide-react";
import { avatarColors } from "@/constants/user";

const chipBaseClassName =
  "flex h-9 shrink-0 items-center gap-2 rounded-lg border px-3 text-sm";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const {
    address,
    balance,
    isConnecting,
    isDisconnecting,
    handleConnectWallet,
    handleDisconnectWallet,
  } = useWalletConnect();

  const avatarFallback = address?.slice(2, 4).toUpperCase() ?? "??";
  const avatarColor =
    avatarColors[
      parseInt(address?.slice(2, 4) ?? "0", 16) % avatarColors.length
    ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-15 items-center gap-4 px-4 md:gap-6 md:px-6 max-w-[1800px]">
        <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
          <Link
            to={NAV_PATH.HOME}
            className="shrink-0 text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            <span className="text-[#0084ff]">Net</span>flop
          </Link>

          <TextField
            type="search"
            startIcon={<Search size={20} />}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search movies, shows..."
            containerClassName="min-w-0 flex-1 max-w-md"
          />
        </div>

        {address && !isConnecting ? (
          <div className="flex shrink-0 items-center gap-2">
            <div
              aria-label="Token balance"
              className={clsx(
                chipBaseClassName,
                "border-[#0084ff]/25 bg-[#0084ff]/10",
              )}
            >
              <Coins
                size={15}
                className="shrink-0 text-[#0084ff]"
                aria-hidden
              />
              {balance.isLoading ? (
                <span className="h-4 w-14 animate-pulse rounded bg-white/20" />
              ) : (
                <div className="flex items-baseline gap-1.5">
                  <span className="font-semibold tabular-nums text-white">
                    {balance.formattedAmount}
                  </span>
                  {balance.symbol ? (
                    <span className="text-xs font-medium text-[#0084ff]/90">
                      {balance.symbol}
                    </span>
                  ) : null}
                </div>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenu.Trigger>
                <button
                  type="button"
                  aria-label="Wallet menu"
                  className={clsx(
                    chipBaseClassName,
                    "cursor-pointer border-white/10 bg-white/6 pr-2.5 text-white transition-colors hover:border-white/20 hover:bg-white/10",
                  )}
                >
                  <Avatar
                    size="2"
                    radius="full"
                    color={avatarColor}
                    fallback={avatarFallback}
                  />
                  <Text size="2" className="hidden text-white sm:inline">
                    {truncateAddress(address)}
                  </Text>
                  <ChevronDown size={15} className="text-white/50" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Item
                  color="red"
                  disabled={isDisconnecting}
                  onSelect={() => {
                    void handleDisconnectWallet();
                  }}
                >
                  {isDisconnecting ? "Disconnecting..." : "Disconnect"}
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={handleConnectWallet}
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
