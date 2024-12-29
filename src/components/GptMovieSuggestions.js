import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const gptMoviesNames = useSelector((store) => store?.gpt?.gptMoviesNames);
  const gptMoviesResults = useSelector((store) => store?.gpt?.gptMoviesResults);

  return (
    <div className="">
      <div className="flex items-center mt-4 gap-2">
        <h1 className="font-semibold px-2 py-2 rounded-md items-center bg-red-600">
          GPT Suggestions :
        </h1>
        <div className="flex  flex-wrap gap-4 font-semibold">
          {gptMoviesNames.map((name) => (
            <h1 key={name} className="p-2 bg-gray-800 rounded-md">
              {name}
            </h1>
          ))}
        </div>
      </div>
      <div className="flex mt-4 flex-wrap gap-4">
        {gptMoviesResults.map((movies) => {
          if (movies?.length === 0) return null;
          return movies?.map((movie) => {
            if (movie?.poster_path === null) return null;
            return <MovieCard movie={movie} key={movie.id} />;
          });
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
