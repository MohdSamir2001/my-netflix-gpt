import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return; // early return
  console.log(movies.length);
  const { original_title, overview, id } = movies[0];
  return (
    <div className="w-full relative">
      <div className="px-16 pt-[27%] bg-gradient-to-r aspect-video from-black absolute top-0 z-20">
        <VideoTitle title={original_title} description={overview} />
      </div>
      <div className="w-full -mt-14 -z-10">
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};
export default MainContainer;
