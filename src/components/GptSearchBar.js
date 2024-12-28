import React from "react";
import { IoSearch } from "react-icons/io5";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langType = useSelector((store) => store.config.lang);
  return (
    <div className="w-full py-2 ">
      <form className="flex gap-2">
        <input
          className="w-4/12 p-2 text-black rounded-md placeholder-gray-900 placeholder-opacity-55 font-semibold outline-none bg-gray-200"
          type="text"
          placeholder={lang[langType].gptSearchPlaceholder}
        />
        <div className="w-[80px] flex gap-2 justify-center items-center rounded-md   py-2 bg-red-600">
          <h1 className="font-semibold">{lang[langType].search}</h1>
          <IoSearch className="scale-150" />
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
