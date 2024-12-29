import React from "react";
import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const { poster_path, backdrop_path, popularity, release_date, title } = movie;
  return (
    <div className="relative cursor-pointer rounded-md overflow-hidden">
      <img
        className="w-72 h-60 object-fill rounded-md"
        src={IMAGE_URL + poster_path || backdrop_path}
        alt="poster-movie"
      />
      <div className="font-semibold line-clamp-1 top-0 text-white bg-red-600 w-fit px-2 py-1 absolute">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
