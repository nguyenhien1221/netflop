import { continueWatchingMovies } from "@/constants/mockMovies";
import MovieRowSection from "./MovieRowSection";

const ContinueWatchingSection = () => {
  return (
    <MovieRowSection
      title="Continue Watching"
      movies={continueWatchingMovies}
      ariaLabel="Continue watching"
      showProgress
    />
  );
};

export default ContinueWatchingSection;
