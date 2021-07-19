import "./poster.css";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";

export const Poster = ({ poster, type, title, year, id }) => {
  const dispatch = useDispatch();

  const onClickDetails = () => {
    dispatch({ type: ACTIONS.GET_OMDB_ID, id });
    dispatch({ type: ACTIONS.SHOW_DETAILS });
  };

  return (
    <div className="film animate__animated animate__faster  animate__backInRight">
      <div className="poster">
        <img src={poster || "N/A"}></img>
      </div>
      <div className="info">
        <span className="type">{type}</span>
        <span className="title">{title}</span>
        <button onClick={onClickDetails} className="button">
          Details
        </button>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};
