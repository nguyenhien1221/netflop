import type { IUserType } from "@/types/user";

export interface UserState {
  userDetail: IUserType | null;
  setUserDetail: (detail: IUserType | null) => void;
  clearUser: () => void;
}
