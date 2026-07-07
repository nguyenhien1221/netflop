import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { WalletState } from "@/types/stores/use-wallet-store.types";

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: null,
      isConnected: false,
      syncConnection: (address) =>
        set({ address, isConnected: address !== null }),
      disconnect: () => set({ address: null, isConnected: false }),
    }),
    {
      name: "wallet-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        address: state.address,
        isConnected: state.isConnected,
      }),
    },
  ),
);
