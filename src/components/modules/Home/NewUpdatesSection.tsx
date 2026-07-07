import { newUpdatesMovies } from "@/constants/mockMovies";
import MovieRowSection from "./MovieRowSection";

const NewUpdatesSection = () => {
  return (
    <MovieRowSection
      title="New Updates"
      movies={newUpdatesMovies}
      ariaLabel="New Updates Movies"
    />
  );
};

export default NewUpdatesSection;
