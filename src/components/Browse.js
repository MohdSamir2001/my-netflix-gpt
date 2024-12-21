import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularVideos from "../hooks/usePopularVideos";
import useTopRatedVideos from "../hooks/useTopRatedVideos";
import useUpcomingVideos from "../hooks/useUpcomingVideos";
const Browse = () => {
  useNowPlayingMovies();
  usePopularVideos();
  useTopRatedVideos();
  useUpcomingVideos();
  return (
    <div className="bg-[#170D11] text-white relative">
      <div>
        <div className="fixed bg-black bg-opacity-80 top-0 w-full z-40">
          <Header />
        </div>
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
