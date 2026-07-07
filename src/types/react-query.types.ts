export interface QueryErrorMeta {
  skipGlobalErrorHandler?: boolean;
  errorMessage?: string;
}

export interface MutationErrorMeta {
  skipGlobalErrorHandler?: boolean;
  errorMessage?: string;
}

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: QueryErrorMeta;
    mutationMeta: MutationErrorMeta;
  }
}
