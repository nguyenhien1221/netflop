import { QueryClient } from "@tanstack/react-query";

export const querryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: 1000 * 60 * 5,
      refetchIntervalInBackground: false,
    },
  },
});
