import { Link } from "react-router-dom";
import { Info, Lock, Play, Star } from "lucide-react";
import Button from "@/components/common/Button";
import { featuredMovie } from "@/constants/mockMovies";
import { NAV_PATH } from "@/constants/nav.constants";

const HeroBannerSection = () => {
  const { title, backdropUrl, year, rating, synopsis, genres, isPremium } =
    featuredMovie;

  return (
    <section
      aria-label="Featured movie"
      className="relative min-h-[420px] w-full overflow-hidden md:min-h-[520px]"
    >
      <img
        src={backdropUrl}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-transparent to-[#0F172A]/40" />

      <div className="relative flex h-full min-h-[420px] flex-col justify-end px-4 pb-8 pt-24 md:min-h-[520px] md:px-6 md:pb-12">
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {isPremium && (
              <span className="flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-black">
                <Lock size={12} />
                PREMIUM
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span>{year}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              {rating}
            </span>
            {genres && (
              <>
                <span>·</span>
                <span>{genres.slice(0, 3).join(" · ")}</span>
              </>
            )}
          </div>

          {synopsis && (
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/80 md:text-base">
              {synopsis}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="min-w-[148px] gap-2.5 font-semibold"
            >
              <Link to={NAV_PATH.WATCH(featuredMovie.id)}>
                <Play size={22} fill="currentColor" />
                Play
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[148px] gap-2.5 font-semibold text-white!"
            >
              <Info size={22} />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;
