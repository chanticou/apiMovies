import "./index.css";
import { Link } from "react-router-dom";

export const Movies = ({ data }) => {
  return (
    <>
      <Link className="link" to={`/movieDetail/${data.id}`}>
        <div className="cardContent">
          <h3 className="title">{data.original_title}</h3>
          <div className="contentImage">
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.original_title}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
