import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularVideos = useSelector((store) => store?.movies?.popularVideo);
  const topRatedVideos = useSelector((store) => store?.movies?.topRatedVideo);
  const upcomingVideos = useSelector((store) => store?.movies?.upcomingVideo);
  return (
    <div className="-mt-10 bg-[#170D11] absolute z-20 w-full">
      <div className="-mt-48">
        <MovieList title={"Now Playing"} movies={nowPlayingMoviesList} />
        <MovieList title={"Top Rated"} movies={topRatedVideos} />
        <MovieList title={"Upcoming"} movies={upcomingVideos} />
        <div className="mb-8">
          <MovieList title={"Popular Movies"} movies={popularVideos} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
