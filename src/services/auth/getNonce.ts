import { apiClient } from "@/configs/axios";
import type {
  LoginRequest,
  LoginResponse,
  NonceResponse,
} from "@/types/auth.types";

export const getNonce = async (address: string): Promise<string> => {
  const response = await apiClient.get<NonceResponse>("/auth/nonce", {
    params: { address },
    skipAuth: true,
  });

  return response.data.nonce;
};

export const login = async (
  address: string,
  signature: string,
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(
    "/auth/login",
    { address, signature } satisfies LoginRequest,
    { skipAuth: true },
  );

  return response.data;
};
