import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { MovieRowSectionProps } from "@/types/components/home/movie-row-section.types";

const MovieRowSection = ({
  title,
  movies,
  ariaLabel,
  showProgress = false,
  showReleaseDate = false,
}: MovieRowSectionProps) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <section aria-label={ariaLabel ?? title}>
      <div className="mb-4 flex items-center justify-between gap-4 md:mb-5">
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          {title}
        </h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-0.5 text-sm font-medium text-[#0084ff] transition-opacity hover:opacity-80"
        >
          See all
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory [-ms-overflow-style:none] scrollbar-none md:grid md:grid-cols-5 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.thumbnailUrl}
            year={"2014"}
            rating={"4.5"}
            isNew={true}
            isPremium={movie.isPremium}
            progress={showProgress ? 0 : undefined}
            releaseDate={showReleaseDate ? "2014" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRowSection;
