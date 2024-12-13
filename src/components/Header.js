import React from "react";
const Header = () => {
  return (
    <div className="px-12 py-2 fixed top-0 w-full bg-gradient-to-b from-black flex justify-between  text-white">
      <div className="">
        <img
          className="w-44 cursor-pointer"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
      <div className="flex items-center">
        <div className="mr-8 cursor-pointer border-[1px] rounded-full py-1 px-4 border-white font-semibold">
          English
        </div>
        <div className="mr-6 cursor-pointer py-1 px-4 border-[1px] rounded-full border-white font-semibold">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Header;
