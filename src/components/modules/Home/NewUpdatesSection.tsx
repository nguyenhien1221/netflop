import MovieRowSection from "./MovieRowSection";
import { useGetMovies } from "@/services/movies/useGetMovies";

const NewUpdatesSection = () => {
  const { Movies } = useGetMovies({
    page: 1,
    limit: 5,
  });
  return (
    <MovieRowSection
      title="New Updates"
      movies={Movies}
      ariaLabel="New Updates Movies"
    />
  );
};

export default NewUpdatesSection;
