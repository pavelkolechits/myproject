import "./detailsmodal.css";
import { ACTIONS } from "../../redux/constants";
import { useDispatch, useSelector } from "react-redux";

export const DetailsModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  const allInfo = useSelector((state) => state.searchOmdbReducer.allInfo);
  return (
    <div
      onClick={closeModal}
      className={"container animate__animated animate__fadeIn animate__fast"}
    >
      <div onClick={(event) => event.stopPropagation()} className="contant">
        <div className="poster_modal">
          <img 
            className="img_allInfo"
            src={allInfo?.Poster ? allInfo.Poster : ""}
          ></img>
        </div>
        <ul className="info_modal">
          <li className="title">
            <span>Title: </span> {allInfo?.Title ? allInfo.Title : ""}
          </li>
          <li className="title">
            <span>Year: </span> {allInfo?.Year ? allInfo.Year : ""}
          </li>
          <li className="title">
            <span>Released:</span> {allInfo?.Released ? allInfo.Released : ""}
          </li>
          <li className="title">
            <span>Runtime: </span> {allInfo?.Runtime ? allInfo.Runtime : ""}
          </li>
          <li className="title">
            <span>Genre: </span> {allInfo?.Genre ? allInfo.Genre : ""}
          </li>
          <li className="title">
            <span>Director: </span> {allInfo?.Director ? allInfo.Director : ""}
          </li>
          <li className="title">
            <span className="writer" >Writer: </span> {allInfo?.Writer ? allInfo.Writer : ""}
          </li>
          <li className="title">
            <span>Actors: </span> {allInfo?.Actors ? allInfo.Actors : ""}
          </li>
          <li className="title">
            
            <span className="plot">{allInfo?.Plot ? allInfo.Plot : ""}</span>
          </li>
          <li className="title">
            <span>Language: </span> {allInfo?.Language ? allInfo.Language : ""}
          </li>
          <li className="title">
            <span>Country: </span> {allInfo?.Country ? allInfo.Country : ""}
          </li>
          <li className="title">
            <span>Ratings: </span>
            {allInfo?.Ratings
              ? `${
                  allInfo.Ratings[0]?.Source === undefined
                    ? "n/a"
                    : allInfo.Ratings[0]?.Source
                }: ${
                  allInfo.Ratings[0]?.Value === undefined
                    ? "n/a"
                    : allInfo.Ratings[0]?.Value
                } , 
                ${
                  allInfo.Ratings[1]?.Source === undefined
                    ? "n/a"
                    : allInfo.Ratings[1]?.Source
                }: ${
                  allInfo.Ratings[1]?.Value === undefined
                    ? "n/a"
                    : allInfo.Ratings[1]?.Value
                } , 
                ${
                  allInfo.Ratings[2]?.Source === undefined
                    ? "n/a"
                    : allInfo.Ratings[2]?.Source
                }: ${
                  allInfo.Ratings[2]?.Value === undefined
                    ? "n/a"
                    : allInfo.Ratings[2]?.Value
                } `
              : ""}
          </li>
          <li className="title">
            <span>DVD: </span> {allInfo?.DVD ? allInfo.DVD : ""}
          </li>
          <li className="title">
            <span>BoxOffice: </span>{" "}
            {allInfo?.BoxOffice ? allInfo.BoxOffice : ""}
          </li>
          <li className="title">
            <span>Production:</span>{" "}
            {allInfo?.Production ? allInfo.Production : ""}
          </li>
        </ul>
      </div>
    </div>
  );
};
