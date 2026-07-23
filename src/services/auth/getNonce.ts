import { apiUrl } from "@/constants/enviroment.constant";
import type {
  LoginRequest,
  LoginResponse,
  NonceResponse,
} from "@/types/auth.types";
import axios from "axios";

export const getNonce = async (address: string): Promise<string> => {
  const response = await axios.get<NonceResponse>(`${apiUrl}/auth/nonce`, {
    params: { address },
  });

  return response.data.nonce;
};

export const login = async (
  address: string,
  signature: string,
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `${apiUrl}/auth/login`,
    { address, signature } satisfies LoginRequest,
  );

  return response.data;
};
