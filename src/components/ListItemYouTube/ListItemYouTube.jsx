import { ItemYouTube } from "../ItemYouTube/ItemYouTube";
import { useSelector } from "react-redux";
import "./listitemyoutube.css";

export const ListItemYouTube = ({}) => {
  const video = useSelector((state) => state);

  return (
    <>
      {video.searchReducer.video === "" ? (
        <h3
          className="wrapp animate__flipInX animate__animated animate__delay-3s"
          style={{ color: "#ccc", textAlign: "center" }}
        >
          {video.searchReducer.video.error}
        </h3>
      ) : (
        <div className="wrapp ">
          {video.searchReducer.video.items?.map((i) => (
            <ItemYouTube key={i.id.videoId} videoId={i.id.videoId} />
          ))}
        </div>
      )}
    </>
  );
};
