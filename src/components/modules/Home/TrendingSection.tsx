import MovieRowSection from "./MovieRowSection";
import { useGetMovies } from "@/services/movies/useGetMovies";

const TrendingSection = () => {
  const { Movies } = useGetMovies({
    page: 3,
    limit: 5,
  });

  return (
    <MovieRowSection
      title="Trending Now"
      movies={Movies}
      ariaLabel="Trending movies"
    />
  );
};

export default TrendingSection;
