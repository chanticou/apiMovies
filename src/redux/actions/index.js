import {
  GET_ALL_MOVIES,
  GET_MOVIE,
  GENRE_ID,
  MOVIE_DETAIL,
  GET_ALL_GENRES,
  FILTER_MOVIES_GENRE,
} from "../../action_types";
import axios from "axios";

export function GetAllMovies(genre) {
  return async function (dispatch) {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=04972ebae94be5b780473d0188fcd20c";

    const getApi = await axios.get(url);

    dispatch({
      type: GET_ALL_MOVIES,
      payload: getApi.data,
    });
  };
}

export function GetMovie(id, allMovies) {
  let findMovie = allMovies.find((el) => el.id == id);
  return async function (dispatch) {
    dispatch({
      type: GET_MOVIE,
      payload: findMovie,
    });
  };
}

export function GenreId(movie) {
  return async function (dispatch) {
    try {
      // .map(({ name }) => name);
      // .map((el) => el.name);

      let genreMovie = movie.genres.map((el) => el.name);

      dispatch({
        type: GENRE_ID,
        payload: genreMovie,
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
}

export function GetMovieDetail(movie_id) {
  return async function (dispatch) {
    try {
      const movieDetail = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=04972ebae94be5b780473d0188fcd20c`;

      const getApi = await axios.get(movieDetail);
      if (!movieDetail) return console.log("NO LLEGO");

      dispatch({
        type: MOVIE_DETAIL,
        payload: getApi.data,
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
}

export function AllgenresMap() {
  return async function (dispatch) {
    const genres =
      "https://api.themoviedb.org/3/genre/tv/list?api_key=04972ebae94be5b780473d0188fcd20c";
    const getApi = await axios.get(genres);
    let removeGenresArr = [
      "Action & Adventure",
      "Documentary",
      "Drama",
      "Kids",
      "News",
      "Reality",
      "Sci-Fi & Fantasy",
      "Soap",
      "Talk",
      "War & Politics",
      "Western",
    ];

    // Filter out the genres that are not present
    let filterGenreApi = getApi.data.genres.filter(
      (el) => !removeGenresArr.includes(el.name)
    );

    let allGenres = filterGenreApi.map((el) => el.name);
    allGenres.unshift("All");

    dispatch({
      type: GET_ALL_GENRES,
      payload: allGenres,
    });
  };
}

export function FilterMoviesGenre(genre, filterMovies, allMovies) {
  return async function (dispatch) {
    let filterMovieGenre;
    const genres =
      "https://api.themoviedb.org/3/genre/tv/list?api_key=04972ebae94be5b780473d0188fcd20c";

    const getApi = await axios.get(genres);
    // console.log(getApi.data.genres);
    let removeGenresArr = [
      "Action & Adventure",
      "Documentary",
      "Drama",
      "Kids",
      "News",
      "Reality",
      "Sci-Fi & Fantasy",
      "Soap",
      "Talk",
      "War & Politics",
      "Western",
    ];

    // Filter out the genres that are not present
    let filterGenreApi = getApi.data.genres.filter(
      (el) => !removeGenresArr.includes(el.name)
    );

    // Return the name that matches with the genre
    let getAllIdsGenres = filterGenreApi.filter((el) => {
      return el.name == genre;
    });

    if (genre == "All") {
      filterMovieGenre = allMovies;
    } else {
      filterMovieGenre = allMovies.filter((movie) => {
        return getAllIdsGenres.some((el) => movie.genre_ids.includes(el.id));
      });
    }

    dispatch({
      type: FILTER_MOVIES_GENRE,
      payload: filterMovieGenre,
    });
  };
}
