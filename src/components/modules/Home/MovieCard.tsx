import { Link } from "react-router-dom";
import { Lock, Star } from "lucide-react";
import { NAV_PATH } from "@/constants/nav.constants";
import type { MovieCardProps } from "@/types/components/home/movie-card.types";

const MovieCard = ({
  id,
  title,
  posterUrl,
  year,
  rating,
  isNew,
  isPremium,
  releaseDate,
}: MovieCardProps) => {
  return (
    <Link
      to={NAV_PATH.WATCH(id)}
      className="group block w-full min-w-[140px] shrink-0 snap-start sm:min-w-0"
    >
      <article>
        <div className="relative overflow-hidden rounded-lg bg-white/5">
          <img
            src={posterUrl}
            alt={title}
            loading="lazy"
            className="aspect-2/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {isNew && (
            <span className="absolute left-2 top-2 rounded bg-[#0084ff] px-2 py-0.5 text-xs font-semibold text-white">
              NEW
            </span>
          )}

          {isPremium && (
            <span className="absolute right-2 top-2 flex items-center gap-1 rounded bg-amber-500/90 px-2 py-0.5 text-xs font-semibold text-black">
              <Lock size={10} />
              PREMIUM
            </span>
          )}

          {releaseDate && (
            <span className="absolute bottom-2 left-2 right-2 rounded bg-black/70 px-2 py-1 text-center text-xs font-medium text-white">
              {releaseDate}
            </span>
          )}

          {/* {progress !== undefined && (
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
              <div
                className="h-full bg-[#0084ff]"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          )} */}

          <div className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#0084ff]/50 transition-all duration-300 group-hover:ring-2" />
        </div>

        <div className="mt-2.5">
          <h3 className="truncate text-sm font-medium text-white">{title}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/60">
            <span>{year}</span>
            {rating !== "—" && (
              <>
                <span>·</span>
                <span className="flex items-center gap-0.5">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  {rating}
                </span>
              </>
            )}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
