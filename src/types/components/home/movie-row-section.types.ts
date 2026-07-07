import type { Movie } from "@/types/movie";

export interface MovieRowSectionProps {
  title: string;
  movies: Movie[];
  ariaLabel?: string;
  showProgress?: boolean;
  showReleaseDate?: boolean;
}
