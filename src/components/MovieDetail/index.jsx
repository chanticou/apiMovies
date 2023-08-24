import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetMovie, GenreId, GetMovieDetail } from "../../redux/actions/index";
import "./index.css";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const { filterMovies, movie, genreId, detailMovie, allMovies } = useSelector(
    (state) => state
  );
  const { id_movie } = useParams();

  useEffect(() => {
    dispatch(GetMovie(id_movie, filterMovies));
    dispatch(GetMovieDetail(id_movie));
    dispatch(GenreId(detailMovie));
  }, [id_movie, movie, detailMovie]);
  // console.log(genreId, allMovies);
  return (
    <>
      <div className="contentAllDetailMovie">
        <div className="contentCardDetail">
          <div className="cardDetail">
            <h3 className="titleDetail">{movie.original_title}</h3>
            <div className="contentImageDetail">
              <img
                className="imageDetail"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
          </div>
        </div>
        <div className="contentDetailsMovie">
          <div>
            {detailMovie.adult ? (
              <span className="age">Mayores de 18</span>
            ) : (
              <span className="age">Apta para todo publico</span>
            )}
          </div>
          <p className="overviewDetail">{movie.overview}</p>
          <div className="contentGenre">
            {genreId?.map((el) => {
              return <span key={el.id}>{el} </span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
