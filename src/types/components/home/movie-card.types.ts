import type { IMovie } from "@/types/movie";

export type MovieCardProps = Pick<
  IMovie,
  | "id"
  | "title"
  | "thumbnailUrl"
  | "description"
  | "category"
  | "price"
  | "currency"
  | "isPremium"
  | "hasPurchased"
>;
