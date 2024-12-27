import React from "react";
import useBackgroundVideo from "../hooks/useBackgroundVideo";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  useBackgroundVideo(movieId);
  const trailerKey = useSelector(
    (store) => store?.movies?.backgroundVideo?.key
  );
  return (
    <div>
      <div>
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?autoplay=1&mute=1&controls=0&si=adQQYductOMqDIy6"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
