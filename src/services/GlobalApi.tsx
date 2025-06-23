import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/movie";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=89f3fc231e3b1aaf6f11b5d39d0b83e7";
const api_key = "89f3fc231e3b1aaf6f11b5d39d0b83e7";

const getPopularMovies = axios.get(
  movieBaseUrl + "/popular?api_key=" + api_key
);

const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getPopularMovies,
  getMovieByGenreId,
};
