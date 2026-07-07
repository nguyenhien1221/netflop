import MovieRowSection from "./MovieRowSection";
import type { GenreRowSectionProps } from "@/types/components/home/genre-row-section.types";

const GenreRowSection = ({ title, movies }: GenreRowSectionProps) => {
  return (
    <MovieRowSection
      title={title}
      movies={movies}
      ariaLabel={`${title} movies`}
    />
  );
};

export default GenreRowSection;
