import * as actions from "../../action_types";

const initialState = {
  filterMovies: [],
  allMovies: [],
  movie: {},
  genreId: [],
  detailMovie: [],
  allGenres: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_MOVIES:
      return {
        ...state,
        filterMovies: action.payload.results,
        allMovies: action.payload.results,
      };
    case actions.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case actions.GENRE_ID:
      // console.log(action.payload);
      return {
        ...state,
        genreId: action.payload,
      };
    case actions.MOVIE_DETAIL:
      return {
        ...state,
        detailMovie: action.payload,
      };
    case actions.GET_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    case actions.FILTER_MOVIES_GENRE:
      return {
        ...state,
        filterMovies: action.payload,
      };
    default:
      return state;
  }
}
