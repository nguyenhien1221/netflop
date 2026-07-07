import type { Movie } from "@/types/movie";

export type MovieCardProps = Pick<
  Movie,
  | "id"
  | "title"
  | "posterUrl"
  | "year"
  | "rating"
  | "isNew"
  | "progress"
  | "releaseDate"
>;
