import { trendingMovies } from "@/constants/mockMovies";
import MovieRowSection from "./MovieRowSection";

const TrendingSection = () => {
  return (
    <MovieRowSection
      title="Trending Now"
      movies={trendingMovies}
      ariaLabel="Trending movies"
    />
  );
};

export default TrendingSection;
