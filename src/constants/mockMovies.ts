import type { IMovie } from "@/types/movie";

export const featuredMovie: IMovie = {
  id: 161,
  title: "Dune: Part Two",
  description:
    "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
  thumbnailUrl:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl:
    "https://embed2.streamc.xyz/embed.php?hash=294db7106f9e9a9634b0b9230fecd440",
  isPremium: true,
  price: 5,
  currency: "ETH",
  category: "Sci-Fi",
  hasPurchased: false,
};
