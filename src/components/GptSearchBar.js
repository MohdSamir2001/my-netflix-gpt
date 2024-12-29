import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoviesResults } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langType = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  // GPT API
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies , comma separated like the example result given ahead . Example Result : Seven , Joker , KGF 3 , Pushpa 2 , Jawan";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });
    // for array we use split function
    const getMoviesByGPT = gptResult?.choices[0]?.message?.content.split(",");

    const promiseArray = getMoviesByGPT.map((movie) =>
      searchMovieInTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMoviesResults({
        moviesNames: getMoviesByGPT,
        moviesResults: tmdbResults,
      })
    );
  };
  // TILL HERE
  return (
    <div className="w-full py-2 ">
      <form
        onClick={(e) => e.preventDefault()}
        className="flex mt-4 justify-center gap-2"
      >
        <input
          ref={searchText}
          className="w-4/12 p-2 text-black rounded-md placeholder-gray-900 placeholder-opacity-55 font-semibold outline-none bg-gray-200"
          type="text"
          placeholder={lang[langType].gptSearchPlaceholder}
        />
        <div
          onClick={handleGptSearchClick}
          className="w-1/12  flex gap-4 px-4 justify-center items-center rounded-md cursor-pointer py-2 bg-red-600"
        >
          <h1 className="font-semibold">{lang[langType].search}</h1>
          <IoSearch className="scale-150" />
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
