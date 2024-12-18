import React from "react";
import { IoMdPlay } from "react-icons/io";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full">
      <div className="w-2/5 mb-2">
        <h1 className="text-6xl mb-2 font-medium">{title}</h1>
        <h1 className="font-semibold mb-4 leading-5">{description}</h1>
      </div>
      <div className="flex gap-2 font-semibold items-center">
        <div className="flex cursor-pointer gap-2 py-2 px-4 bg-slate-800 items-center">
          <h1 className="pt-[5%]">
            <IoMdPlay />
          </h1>
          <h1>Play</h1>
        </div>
        <div className="flex cursor-pointer gap-2 justify-center bg-slate-800 py-2 px-4 items-center">
          <h1 className="pt-[2%]">
            <MdOutlineInfo />
          </h1>
          <h1>More Info</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
