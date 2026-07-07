import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

import type { Mutation, Query } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type {
  MutationErrorMeta,
  QueryErrorMeta,
} from "@/types/react-query.types";
import { getErrorMessage } from "@/utils/error.utils";

export const handleQueryError = (
  error: Error,
  query: Query<unknown, unknown, unknown, readonly unknown[]>,
) => {
  const meta = query.meta as QueryErrorMeta | undefined;

  if (meta?.skipGlobalErrorHandler) return;

  const message = meta?.errorMessage ?? getErrorMessage(error);
  toast.error(message);
};

export const handleMutationError = (
  error: Error,
  _variables: unknown,
  _onMutateResult: unknown,
  mutation: Mutation<unknown, unknown, unknown, unknown>,
) => {
  const meta = mutation.meta as MutationErrorMeta | undefined;

  if (meta?.skipGlobalErrorHandler) return;

  const message = meta?.errorMessage ?? getErrorMessage(error);
  toast.error(message);
};

export const querryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleQueryError,
  }),
  mutationCache: new MutationCache({
    onError: handleMutationError,
  }),
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
    mutations: {
      retry: 0,
    },
  },
});
