import { apiClient } from "@/configs/axios";
import { querryClient } from "@/configs/querryClient";
import type {
  PurchaseMovieRequest,
  PurchaseMovieResponse,
} from "@/types/purchase.types";
import { useMutation } from "@tanstack/react-query";

export const purchaseMovie = async (
  id: string,
  txHash: string,
): Promise<PurchaseMovieResponse> => {
  const response = await apiClient.post<PurchaseMovieResponse>(
    `/movies/${id}/purchase`,
    { txHash } satisfies PurchaseMovieRequest,
  );

  return response.data;
};

export const usePurchaseMovieMutation = () =>
  useMutation({
    mutationFn: ({ id, txHash }: { id: string; txHash: string }) =>
      purchaseMovie(id, txHash),
    onSuccess: (_, { id }) => {
      void querryClient.invalidateQueries({ queryKey: ["movieDetails", id] });
    },
  });
