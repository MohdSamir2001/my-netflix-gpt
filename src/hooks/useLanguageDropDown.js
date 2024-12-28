import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const useLanguageDropDown = () => {
  const [langDrop, setLangDrop] = useState(false);
  const handleLangTag = () => {
    setLangDrop(!langDrop);
  };
  <div
    onClick={handleLangTag}
    className="border-[1px] relative flex items-center gap-8 font-semibold cursor-pointer bg-red-950 px-4 py-1 rounded-full"
  >
    <h1>English</h1>
    {!langDrop && <MdArrowDropDown className="scale-150" />}
    {langDrop && <MdArrowDropUp className="scale-150" />}
    <div
      style={{
        transition: "height 0.1s ease-in-out", // Transition added here
        height: langDrop ? "80px" : "0px", // Smooth transition for height
      }}
      className="absolute top-10 bg-transparent w-32 rounded-md overflow-hidden text-center right-0"
    >
      <h1 className="p-2 bg-red-800 bg-opacity-65 hover:bg-gray-500 border-b-2">
        English
      </h1>
      <h1 className="p-2 bg-red-800 bg-opacity-65 hover:bg-gray-500">Hindi</h1>
    </div>
  </div>;
};

export default useLanguageDropDown;
