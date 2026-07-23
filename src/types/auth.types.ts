import type { IUserType } from "@/types/user";

export interface NonceResponse {
  nonce: string;
}

export interface LoginRequest {
  address: string;
  signature: string;
}

export interface LoginResponse {
  accessToken: string;
  success: boolean;
  user: IUserType;
}
