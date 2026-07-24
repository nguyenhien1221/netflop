import type { IMovie } from "@/types/movie";

export interface PurchaseMovieRequest {
  txHash: string;
}

export interface PurchaseMovieResponse {
  success: boolean;
  movie?: IMovie;
}
