import "./itemyoutube.css";
import YouTube from "react-youtube";

export const ItemYouTube = ({ videoId }) => {
  return <YouTube className="player " videoId={videoId} />;
};
