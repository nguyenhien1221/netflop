const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again.";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const getAxiosErrorMessage = (error: Record<string, unknown>): string | null => {
  const response = error.response;

  if (!isRecord(response)) return null;

  const data = response.data;

  if (typeof data === "string" && data.trim()) return data;

  if (isRecord(data)) {
    const message = data.message ?? data.error;

    if (typeof message === "string" && message.trim()) return message;
  }

  if (typeof response.statusText === "string" && response.statusText.trim()) {
    return response.statusText;
  }

  return null;
};

export const getErrorMessage = (
  error: unknown,
  fallback = DEFAULT_ERROR_MESSAGE,
): string => {
  if (typeof error === "string" && error.trim()) return error;

  if (error instanceof Error && error.message.trim()) return error.message;

  if (isRecord(error)) {
    const axiosMessage = getAxiosErrorMessage(error);

    if (axiosMessage) return axiosMessage;

    if (typeof error.message === "string" && error.message.trim()) {
      return error.message;
    }
  }

  return fallback;
};
