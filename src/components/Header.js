import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign In Or Sign Up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when components is unmounts
    return () => unsubscribe();
  }, []);
  const handleProfileToggle = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="px-12 pb-1 pt-1  w-full bg-gradient-to-b from-black flex justify-between  text-white">
      <div className="">
        <img
          className="w-44 cursor-pointer"
          src={LOGO_URL}
          alt="netflix-logo"
        />
      </div>
      {user && (
        <div className="flex items-center">
          <div className="mr-8 cursor-pointer border-[1px] rounded-full py-1 px-4 border-white font-semibold">
            English
          </div>
          <div>
            <div
              onClick={handleProfileToggle}
              className="flex gap-1 cursor-pointer items-center"
            >
              <img className="w-12 rounded-lg" src={user.photoURL} alt="" />
              {dropDown ? (
                <MdArrowDropUp className="scale-150" />
              ) : (
                <MdArrowDropDown className="scale-150" />
              )}
            </div>
            {dropDown && (
              <div
                className={`bg-black border-l-2 border-b-2 bg-opacity-80 h-32 absolute top-[100%] w-32 overflow-hidden right-0 text-black z-50`}
              >
                <h1
                  onClick={userSignOut}
                  className="text-white cursor-pointer border-b-2 p-2  text-center font-semibold"
                >
                  Sign Out
                </h1>
                <h1 className="text-white border-b-2 cursor-pointer p-2  text-center font-semibold">
                  Edit Profile
                </h1>
                <h1 className="text-white cursor-pointer p-2 text-center font-semibold">
                  View History
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
