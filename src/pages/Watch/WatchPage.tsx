import { Link, useParams } from "react-router-dom";
import VideoPlayer from "@/components/modules/Watch/VideoPlayer";
import PremiumGateSection from "@/components/modules/Watch/PremiumGateSection";
import MovieInfoSection from "@/components/modules/Watch/MovieInfoSection";
import Button from "@/components/common/Button";
import { NAV_PATH } from "@/constants/nav.constants";
import { useWalletStore } from "@/stores/useWalletStore";
import { useGetMovieDetails } from "@/services/movies/useGetMovieDetails";
import { Loader2 } from "lucide-react";

const WatchPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const isConnected = useWalletStore((state) => state.isConnected);

  const { MovieDetails, isLoadingMovieDetails } = useGetMovieDetails(
    movieId ?? "",
  );

  if (isLoadingMovieDetails) {
    return (
      <div>
        <Loader2 />
      </div>
    );
  }

  if (!MovieDetails) {
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

  const isPremiumLocked = Boolean(MovieDetails.isPremium && !isConnected);

  return (
    <main className="flex flex-col gap-6 px-4 py-6 md:gap-8 md:px-6 md:py-8">
      {isPremiumLocked ? (
        <PremiumGateSection movie={MovieDetails} />
      ) : (
        <VideoPlayer
          videoUrl={MovieDetails.videoUrl}
          posterUrl={MovieDetails.thumbnailUrl}
          title={MovieDetails.title}
        />
      )}
      <MovieInfoSection movie={MovieDetails} />
    </main>
  );
};

export default WatchPage;
