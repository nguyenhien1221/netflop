import { useGetMovies } from "@/services/movies/useGetMovies";
import MovieRowSection from "./MovieRowSection";

const GenreRowSection = ({ title }: { title: string }) => {
  const { Movies } = useGetMovies({
    category: title.toLocaleLowerCase(),
    page: 1,
    limit: 10,
  });

  return (
    <MovieRowSection
      title={title}
      movies={Movies}
      ariaLabel={`${title} movies`}
    />
  );
};

export default GenreRowSection;
