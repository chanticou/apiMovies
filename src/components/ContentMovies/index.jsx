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
    setTimeout(() => {
      setloading(false);
    }, 3000);
    dispatch(GetAllMovies());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        filterMovies?.map((el) => {
          return <Movies key={el.id} data={el} />;
        })
      )}
    </>
  );
};
