import { isEmbedUrl } from "@/utils/video.utils";
import type { VideoPlayerProps } from "@/types/components/watch/video-player.types";

const VideoPlayer = ({ videoUrl, posterUrl, title }: VideoPlayerProps) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      {videoUrl ? (
        isEmbedUrl(videoUrl) ? (
          <iframe
            src={videoUrl}
            title={`Watch ${title}`}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <video
            src={videoUrl}
            poster={posterUrl}
            controls
            className="absolute inset-0 h-full w-full"
            aria-label={`Watch ${title}`}
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/80 px-6 text-center">
          <img
            src={posterUrl}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <p className="relative text-sm font-medium text-white/80 md:text-base">
            Video unavailable for this title
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
