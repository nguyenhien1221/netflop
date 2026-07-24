import axios from "axios";
import { apiUrl } from "@/constants/enviroment.constant";
import { useUserStore } from "@/stores/useUserStore";
import "@/types/axios.types";

if (import.meta.env.DEV && !apiUrl) {
  console.warn("[apiClient] VITE_API_URL is missing");
}

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  if (config.skipAuth) return config;

  const accessToken = useUserStore.getState().accessToken;

  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useUserStore.getState().clearUser();
    }

    return Promise.reject(error);
  },
);
