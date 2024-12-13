import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MainHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
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
        <div
          onClick={userSignOut}
          className="mr-6 cursor-pointer py-1 px-4 border-[1px] rounded-full border-white font-semibold"
        >
          Sign Out
        </div>
        <div>
          <img className="w-12" src={user.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
