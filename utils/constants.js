// import environment variables
import { API_KEY_MOVIES } from "@env";

// options for select component
export const data = [
  { key: "now_playing", value: "Now Playing" },
  { key: "popular", value: "Popular" },
  { key: "top_rated", value: "Top Rated" },
  { key: "upcoming", value: "Upcoming" },
];

export const dataTv = [
  { key: "airing_today", value: "Airing Today" },
  { key: "on_the_air", value: "On The Air" },
  { key: "popular", value: "Popular" },
  { key: "top_rated", value: "Top Rated" },
];

export const dataSearch = [
  { key: "movie", value: "Movie" },
  { key: "multi", value: "Multi" },
  { key: "tv", value: "TV Show" },
];

// API credentials
const API_KEY = "";
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

// tv shows endpoints
// 1. airing today
export const airingTodayEndpoint = `${API_BASE_URL}/tv/airing_today?api_key=${API_KEY}`;

// 2. on the air
export const onTheAirEndpoint = `${API_BASE_URL}/tv/on_the_air?api_key=${API_KEY}`;

// 3. popular
export const popularTvEndpoint = `${API_BASE_URL}/tv/popular?api_key=${API_KEY}`;

// 4. top rated
export const topRatedTvEndpoint = `${API_BASE_URL}/tv/top_rated?api_key=${API_KEY}`;

// search enpoints
// 1. search by type
export const movieSearchEndpoint = (type) =>
  `${API_BASE_URL}/search/${type}?api_key=${API_KEY}`;

// more details endpoint
export const moreDetailsEndpoint = (type, id) =>
  `${API_BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
