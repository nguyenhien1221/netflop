import HeroBannerSection from "@/components/modules/Home/HeroBannerSection";
import ContinueWatchingSection from "@/components/modules/Home/ContinueWatchingSection";
import NewUpdatesSection from "@/components/modules/Home/NewUpdatesSection";
import TrendingSection from "@/components/modules/Home/TrendingSection";
import GenreRowSection from "@/components/modules/Home/GenreRowSection";
import { actionMovies, sciFiMovies } from "@/constants/mockMovies";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-8 pb-8 md:gap-10 md:pb-10">
      <HeroBannerSection />

      <div className="flex flex-col gap-8 px-4 md:gap-10 md:px-6">
        <ContinueWatchingSection />
        <NewUpdatesSection />
        <TrendingSection />
        <GenreRowSection title="Action" movies={actionMovies} />
        <GenreRowSection title="Sci-Fi" movies={sciFiMovies} />
      </div>
    </main>
  );
};

export default HomePage;
