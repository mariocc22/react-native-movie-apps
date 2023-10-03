// axios import
import axios from "axios";

// endpoints import
import {
  nowPlayingEndpoint,
  popularEndPoint,
  topRatedEndpoint,
  upcomingEndpoint,
  searchEndpoint,
  movieDetailsEndpoint,
  airingTodayEndpoint,
  onTheAirEndpoint,
  popularTvEndpoint,
  topRatedTvEndpoint,
  tvShowDetailsEndpoint,
} from "./constants";

// api call function (reusable)
const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// movies api calls
export const fetchNowPlayingMovies = () => {
  return apiCall(nowPlayingEndpoint);
};

export const fetchPopularMovies = () => {
  return apiCall(popularEndPoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingEndpoint);
};

export const fetchSearchMovies = (params) => {
  return apiCall(searchEndpoint, params);
};

export const fetchMovieDetails = async (movieId) => {
  return apiCall(movieDetailsEndpoint(movieId));
};

// tv shows api calls
export const fetchAiringTodayTvShows = () => {
  return apiCall(airingTodayEndpoint);
};

export const fetchOnTheAirTvShows = () => {
  return apiCall(onTheAirEndpoint);
};

export const fetchPopularTvShows = () => {
  return apiCall(popularTvEndpoint);
};

export const fetchTopRatedTvShows = () => {
  return apiCall(topRatedTvEndpoint);
};

export const fetchTvShowDetails = (tvshowId) => {
  return apiCall(tvShowDetailsEndpoint(tvshowId));
};

// functions for images
export const image500 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
export const image342 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
export const image185 = (posterPath) =>
  posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;
