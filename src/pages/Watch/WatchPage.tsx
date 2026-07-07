import { Link, useParams } from "react-router-dom";
import VideoPlayer from "@/components/modules/Watch/VideoPlayer";
import PremiumGateSection from "@/components/modules/Watch/PremiumGateSection";
import MovieInfoSection from "@/components/modules/Watch/MovieInfoSection";
import Button from "@/components/common/Button";
import { getMovieById } from "@/utils/movie.utils";
import { NAV_PATH } from "@/constants/nav.constants";
import { useWalletStore } from "@/stores/useWalletStore";

const WatchPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const isConnected = useWalletStore((state) => state.isConnected);
  const movie = movieId ? getMovieById(movieId) : undefined;

  if (!movie) {
    return (
      <main className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center md:px-6">
        <h1 className="text-2xl font-semibold text-white">Movie not found</h1>
        <p className="text-sm text-white/60">
          The title you are looking for does not exist or has been removed.
        </p>
        <Button asChild variant="primary" size="md">
          <Link to={NAV_PATH.HOME}>Back to home</Link>
        </Button>
      </main>
    );
  }

  const isPremiumLocked = Boolean(movie.isPremium && !isConnected);

  return (
    <main className="flex flex-col gap-6 px-4 py-6 md:gap-8 md:px-6 md:py-8">
      {isPremiumLocked ? (
        <PremiumGateSection movie={movie} />
      ) : (
        <VideoPlayer
          videoUrl={movie.videoUrl}
          posterUrl={movie.posterUrl}
          title={movie.title}
        />
      )}
      <MovieInfoSection movie={movie} />
    </main>
  );
};

export default WatchPage;
