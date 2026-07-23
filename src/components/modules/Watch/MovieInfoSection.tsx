import type { MovieInfoSectionProps } from "@/types/components/watch/movie-info-section.types";

const MovieInfoSection = ({ movie }: MovieInfoSectionProps) => {
  const { category, description, thumbnailUrl, title } = movie;

  return (
    <section aria-label="Movie information" className="max-w-4xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <img
          src={thumbnailUrl}
          alt={`${title} poster`}
          className="mx-auto aspect-2/3 w-[140px] shrink-0 rounded-lg object-cover ring-1 ring-white/10 sm:mx-0 sm:w-[160px]"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h1>
            {/* {isNew && (
              <span className="rounded bg-[#0084ff] px-2 py-0.5 text-xs font-semibold text-white">
                NEW
              </span>
            )} */}
          </div>

          {/* <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span>{releaseDate}</span>
            {rating !== "—" && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  {rating}
                </span>
              </>
            )}
          </div> */}

          {category && category.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                key={category}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
              >
                {category}
              </span>
            </div>
          )}

          {description ? (
            <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-base">
              {description}
            </p>
          ) : (
            <p className="mt-5 text-sm text-white/50">
              No description available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieInfoSection;
