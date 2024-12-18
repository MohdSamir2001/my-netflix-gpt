import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-[#170D11] text-white relative">
      <div className="sticky bg-gradient-to-b from-red-800 top-0 w-full z-40">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
