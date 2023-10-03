// options for select component
export const data = [
  { key: "now_playing", value: "Now Playing" },
  { key: "popular", value: "Popular" },
  { key: "top_rated", value: "Top Rated" },
  { key: "upcoming", value: "Upcoming" },
];

// API credentials
const API_KEY = "a2e2ef2595c977b7be548a9e245f3aa8";
const API_BASE_URL = "https://api.themoviedb.org/3";

// movies endpoints
// 1. now playing
export const nowPlayingEndpoint = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`;

// 2. popular
export const popularEndPoint = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`;

// 3. top rated
export const topRatedEndpoint = `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`;

// 4. upcoming
export const upcomingEndpoint = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`;

// 5. search
export const searchEndpoint = `${API_BASE_URL}/search/movie?api_key=${API_KEY}`;

// 6. movie details
export const movieDetailsEndpoint = (id) =>
  `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`;
