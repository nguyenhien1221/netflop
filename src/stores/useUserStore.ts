import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { UserState } from "@/types/stores/use-user-store.types";

const initialState: Pick<UserState, "userDetail"> = {
  userDetail: null,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUserDetail: (userDetail) => set({ userDetail }),
      clearUser: () => set(initialState),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        userDetail: state.userDetail,
      }),
    },
  ),
);
