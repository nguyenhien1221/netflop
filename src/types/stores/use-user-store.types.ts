import type { IUserType } from "@/types/user";

export interface UserState {
  userDetail: IUserType | null;
  accessToken: string | null;
  setUserDetail: (detail: IUserType | null) => void;
  setAccessToken: (token: string | null) => void;
  clearUser: () => void;
}
