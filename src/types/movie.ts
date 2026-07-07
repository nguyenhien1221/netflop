export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  year: string;
  rating: string;
  synopsis?: string;
  genres?: string[];
  isNew?: boolean;
  releaseDate?: string;
  progress?: number;
  videoUrl?: string;
}
