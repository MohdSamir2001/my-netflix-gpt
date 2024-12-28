import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularVideos from "../hooks/usePopularVideos";
import useTopRatedVideos from "../hooks/useTopRatedVideos";
import useUpcomingVideos from "../hooks/useUpcomingVideos";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularVideos();
  useTopRatedVideos();
  useUpcomingVideos();
  return (
    <div className="bg-[#170D11] min-h-screen text-white relative">
      <div>
        <div className="fixed bg-black bg-opacity-5 top-0 w-full z-40">
          <Header />
        </div>
      </div>
      {!showGptSearch && (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
      {showGptSearch && <GptSearch />}
    </div>
  );
};

export default Browse;
