import type { Movie } from "@/types/movie";
import {
  actionMovies,
  continueWatchingMovies,
  featuredMovie,
  newUpdatesMovies,
  sciFiMovies,
  trendingMovies,
} from "@/constants/mockMovies";

const allMovies: Movie[] = Array.from(
  new Map(
    [
      featuredMovie,
      ...newUpdatesMovies,
      ...continueWatchingMovies,
      ...trendingMovies,
      ...actionMovies,
      ...sciFiMovies,
    ].map((movie) => [movie.id, movie]),
  ).values(),
);

export const getMovieById = (id: string): Movie | undefined =>
  allMovies.find((movie) => movie.id === id);
