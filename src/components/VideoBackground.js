import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const [vid, setvid] = useState(null);
  console.log(movieId);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    setvid(trailer?.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            vid +
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
