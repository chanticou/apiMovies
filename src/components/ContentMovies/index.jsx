import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAllMovies } from "../../redux/actions/index";
import { Movies } from "../Movies";
import Spinner from "../Spinner/index";
import "./index.css";

export const ContentMovies = () => {
  const { filterMovies } = useSelector((state) => state);
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMovies()).then(() => {
      setloading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        filterMovies?.map((el) => {
          return <Movies data={el} />;
        })
      )}
    </>
  );
};
