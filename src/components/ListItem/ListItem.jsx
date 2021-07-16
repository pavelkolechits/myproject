import { Item } from "../Item/Item";
import { useSelector } from "react-redux";
import "./listitem.css";

export const ListItem = ({}) => {
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
            <Item key={i.id.videoId} videoId={i.id.videoId} />
          ))}
        </div>
      )}
    </>
  );
};
