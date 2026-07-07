import { createConfig, http } from "wagmi";
import { baseSepolia, bsc } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bsc, baseSepolia],
  connectors: [metaMask()],
  transports: {
    [baseSepolia.id]: http(),
    [bsc.id]: http(),
  },
});
