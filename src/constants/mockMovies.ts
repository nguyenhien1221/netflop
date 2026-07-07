import type { Movie } from "@/types/movie";

export const featuredMovie: Movie = {
  id: "featured-dune",
  title: "Dune: Part Two",
  posterUrl:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  backdropUrl:
    "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/03/dune-2-thumbnail.jpg",
  year: "2024",
  rating: "8.7",
  synopsis:
    "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  isNew: true,
  videoUrl:
    "https://embed2.streamc.xyz/embed.php?hash=294db7106f9e9a9634b0b9230fecd440",
};

export const newUpdatesMovies: Movie[] = [
  featuredMovie,
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    posterUrl: "https://i.ebayimg.com/images/g/aH4AAOSwXM1maWv7/s-l1200.jpg",
    year: "2023",
    rating: "8.5",
    synopsis:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    genres: ["Biography", "Drama", "History"],
    isNew: true,
  },
  {
    id: "poor-things",
    title: "Poor Things",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2023",
    rating: "8.2",
    synopsis:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by a brilliant and unorthodox scientist.",
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: "the-batman",
    title: "The Batman",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
    year: "2022",
    rating: "8.0",
    synopsis:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2022",
    rating: "8.4",
    synopsis:
      "A middle-aged Chinese immigrant is swept up in an insane adventure in which she alone can save existence by exploring other universes.",
    genres: ["Action", "Adventure", "Comedy"],
  },
];

export const continueWatchingMovies: Movie[] = [
  {
    id: "blade-runner",
    title: "Blade Runner 2049",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/vi/8/8b/Blade_Runner_2049_poster.jpg",
    year: "2017",
    rating: "8.0",
    progress: 62,
    synopsis:
      "Young blade runner K's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
    genres: ["Sci-Fi", "Thriller"],
    videoUrl:
      "https://embed2.streamc.xyz/embed.php?hash=294db7106f9e9a9634b0b9230fecd440",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2014",
    rating: "8.7",
    progress: 35,
    synopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    videoUrl:
      "https://embed3.streamc.xyz/embed.php?hash=62a145f35b19a07896f37fee66ab3fed",
  },
  {
    id: "inception",
    title: "Inception",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71uKM+LdgFL.jpg",
    year: "2010",
    rating: "8.8",
    progress: 88,
    synopsis:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    id: "matrix",
    title: "The Matrix",
    posterUrl:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    year: "1999",
    rating: "8.7",
    progress: 15,
    synopsis:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth of his existence.",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81IfoBox2TL.jpg",
    year: "2008",
    rating: "9.0",
    progress: 45,
    synopsis:
      "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
    genres: ["Action", "Crime", "Drama"],
  },
];

export const trendingMovies: Movie[] = [
  {
    id: "fallout",
    title: "Fallout",
    posterUrl: "https://i.ebayimg.com/images/g/jFgAAOSwQMll7Ldu/s-l1200.jpg",
    year: "2024",
    rating: "8.3",
    synopsis:
      "In a future post-apocalyptic Los Angeles, residents of an underground vault are forced to return to the irradiated wasteland above.",
    genres: ["Action", "Adventure", "Drama"],
    isNew: true,
  },
  {
    id: "shogun",
    title: "Shōgun",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlg6JMKwTRu-Nt8hp0s_r-TjwK_VIIV_4A9GDpAjAOChm_jYgd5ovP0tY&s=10",
    year: "2024",
    rating: "8.6",
    synopsis:
      "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power.",
    genres: ["Action", "Drama", "History"],
    isNew: true,
  },
  {
    id: "house-dragon",
    title: "House of the Dragon",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGST86o1DLwSGmFs50E5myUFkgjMH7lebJEItLclLvqV-Eed3m03YB4re&s=10",
    year: "2024",
    rating: "8.4",
    synopsis:
      "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: "bear",
    title: "The Bear",
    posterUrl:
      "https://image.tmdb.org/t/p/original/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
    year: "2024",
    rating: "8.5",
    synopsis:
      "A young chef from the fine dining world returns to Chicago to run his family's Italian beef sandwich shop after a tragic death.",
    genres: ["Comedy", "Drama"],
  },
  {
    id: "wednesday",
    title: "Wednesday",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/vi/6/66/Wednesday_Netflix_series_poster.png",
    year: "2024",
    rating: "8.1",
    synopsis:
      "Wednesday Addams is expelled from her school after dumping piranhas into the school's pool in retaliation for the boys' water polo team bullying her brother.",
    genres: ["Comedy", "Fantasy", "Mystery"],
  },
];

export const actionMovies: Movie[] = [
  {
    id: "john-wick",
    title: "John Wick",
    posterUrl: "https://m.media-amazon.com/images/I/71i6JuSZUGL.jpg",
    year: "2014",
    rating: "7.4",
    synopsis:
      "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: "mad-max",
    title: "Mad Max: Fury Road",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    year: "2015",
    rating: "8.1",
    synopsis:
      "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to escape from a tyrannical warlord.",
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: "top-gun",
    title: "Top Gun: Maverick",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd53N-USK_FO1TmmOEA9dUg2shyTgr6OUhnYoBLKkz_FYzEBmkt-i2lmE&s=10",
    year: "2022",
    rating: "8.3",
    synopsis:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, training a detachment of graduates for a special assignment.",
    genres: ["Action", "Drama"],
  },
  {
    id: "mission-impossible",
    title: "Mission: Impossible",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMbrj338pTvhHgEkT-BeMl_EQ0SzYqIkyT3zFh8ze59tz-TwiRWb_mOw&s=10",
    year: "2023",
    rating: "7.7",
    synopsis:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: to track down a terrifying new weapon that threatens all of humanity.",
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    id: "avatar",
    title: "Avatar: The Way of Water",
    posterUrl: "https://m.media-amazon.com/images/I/71Lvqoov42L.jpg",
    year: "2022",
    rating: "7.6",
    synopsis:
      "Jake Sully lives with his newfound family on the planet of Pandora. When a familiar threat returns, Jake must work with Neytiri and the army of the Na'vi.",
    genres: ["Action", "Adventure", "Fantasy"],
  },
];

export const sciFiMovies: Movie[] = [
  {
    id: "arrival",
    title: "Arrival",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/vi/d/df/Arrival%2C_Movie_Poster.jpg",
    year: "2016",
    rating: "7.9",
    synopsis:
      "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    genres: ["Sci-Fi", "Drama", "Mystery"],
  },
  {
    id: "ex-machina",
    title: "Ex Machina",
    posterUrl: "https://i.ebayimg.com/images/g/FOsAAOSw7D1mYqfg/s-l400.jpg",
    year: "2014",
    rating: "7.7",
    synopsis:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of an AI.",
    genres: ["Sci-Fi", "Drama", "Thriller"],
  },
  {
    id: "alien",
    title: "Alien: Prometheus",
    posterUrl: "https://i.ebayimg.com/images/g/RsMAAOSwgQ9Vq-Kb/s-l1200.jpg",
    year: "2012",
    rating: "8.5",
    synopsis:
      "Following clues to the origins of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
    genres: ["Sci-Fi", "Horror", "Mystery"],
  },
  {
    id: "2001",
    title: "2001: A Space Odyssey",
    posterUrl:
      "https://i.etsystatic.com/13513569/r/il/5e7479/1963385785/il_1080xN.1963385785_fsj1.jpg",
    year: "1968",
    rating: "8.3",
    synopsis:
      "After discovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins.",
    genres: ["Sci-Fi", "Adventure"],
  },
  {
    id: "district9",
    title: "District 9",
    posterUrl:
      "https://m.media-amazon.com/images/I/51wY18UJwOL._AC_UY1000_.jpg",
    year: "2009",
    rating: "7.9",
    synopsis:
      "Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent.",
    genres: ["Sci-Fi", "Action", "Drama"],
  },
];
