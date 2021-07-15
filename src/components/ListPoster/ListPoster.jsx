import "./listposter.css";
import { Poster } from "../Poster/Poster";
import { useSelector } from "react-redux";

export const ListPoster = ({ modal, className }) => {
  const poster = useSelector(
    (state) => state.searchOmdbhReducer.request
  );

  return (
    <div className={className}>
      {!poster?.Error?  poster?.Search.map((i) => (
        <Poster
          modal={modal}
          id={i.imdbID}
          type={i.Type}
          key={i.imdbID}
          year={i.Year}
          title={i.Title}
          poster={i.Poster !== 'N/A' ? i.Poster : <img src={""}></img> }
        />
      )): ""}
    </div>
  );
};
