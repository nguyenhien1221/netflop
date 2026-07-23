import type { IMovie } from "@/types/movie";

export interface MovieRowSectionProps {
  title: string;
  movies: IMovie[];
  ariaLabel?: string;
  showProgress?: boolean;
  showReleaseDate?: boolean;
}
