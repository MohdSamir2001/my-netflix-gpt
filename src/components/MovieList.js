import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const MovieList = ({ title, movies }) => {
  const [dragValue, setDragValue] = useState(0);
  const cardWidth = 296;
  const numCards = 20; // we can type dyanamic value ( movies.length )
  const showsCards = 5; // if less than 5 , then total total cards otherwise assign 5
  const showsWidth = showsCards * cardWidth;
  const totalWidth = numCards * cardWidth;
  const translatingWidth = totalWidth - showsWidth;
  const handleRightButton = () => {
    if (dragValue < translatingWidth) {
      setDragValue((prev) => prev + 3 * cardWidth);
    }
  };
  const handleLeftButton = () => {
    if (dragValue > 0) {
      setDragValue((prev) => prev - 3 * cardWidth);
    }
  };
  if (!movies || movies.length === 0) return;
  return (
    <div className="px-8 mt-4">
      <div className="bg-transparent">
        <h1 className="font-medium  text-2xl">{title}</h1>
        <div className="rounded-md relative">
          <div className="flex mt-2 rounded-md overflow-x-hidden gap-2 ">
            {movies?.map((movie) => (
              <div
                style={{
                  transform: `translateX(-${dragValue}px)`,
                  transition: "transform 0.5s ease-in-out", // Smooth transition
                }}
                key={movie.id}
                className="flex-shrink-0"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <button
            onClick={handleLeftButton}
            className={`absolute top-0 p-2 left-0 h-60  bg-slate-400 rounded-tl-md rounded-bl-md ${
              dragValue ? "bg-opacity-50" : "bg-opacity-0 text-transparent"
            }`}
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={handleRightButton}
            className={`absolute bg-slate-400 top-0 p-2 ${
              dragValue === translatingWidth
                ? "bg-opacity-0 text-transparent"
                : "bg-opacity-50"
            } right-0 h-60 rounded-tr-md rounded-br-md `}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
