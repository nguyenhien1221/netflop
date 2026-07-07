import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import { NAV_PATH } from "@/constants/nav.constants";
import { Search } from "lucide-react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-15 items-center gap-4 px-4 md:gap-6 md:px-6 max-w-[1800px]">
        <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
          <Link
            to={NAV_PATH.HOME}
            className="shrink-0 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
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

        <Button variant="primary" size="lg">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
