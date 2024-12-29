import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="pt-20 relative">
      <div>
        <img
          className="absolute bg-gradient-to-r from-black top-20 z-10"
          src={BACKGROUND_IMAGE_URL}
          alt="Background Image URL"
        />
        <div className="z-30 px-4 bg-black min-h-[1080%] bg-opacity-70 w-full absolute">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
