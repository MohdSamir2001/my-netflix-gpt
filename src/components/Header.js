import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const handleSearchToggle = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
        <div className="flex gap-2 items-center">
          {showGptSearch && (
            <div className="bg-red-600 rounded-full font-semibold border-[1px] py-1 px-4">
              <select
                onChange={handleLanguageChange}
                className="bg-red-600 cursor-pointer "
              >
                {SUPPORTED_LANGUAGES.map((lang) => {
                  return (
                    <option value={lang.identifier} key={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          <div
            onClick={handleSearchToggle}
            className="mr-8 bg-red-600 cursor-pointer border-[1px] rounded-full py-1 px-4 border-white font-semibold"
          >
            {showGptSearch ? <h1>Home</h1> : <h1>GPT Search</h1>}
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

            <div
              style={{
                transition: "height 0.1s ease-in-out", // Transition added here
                height: dropDown ? "122px" : "0px", // Smooth transition for height
              }}
              className={`bg-red-600 opacity-90 rounded-md  bg-opacity-80 h-32 absolute top-[100%] w-32 overflow-hidden right-5 text-black z-50`}
            >
              <h1
                onClick={userSignOut}
                className="text-white hover:bg-gray-500 cursor-pointer border-b-2 p-2  text-center font-semibold"
              >
                Sign Out
              </h1>
              <h1 className="text-white hover:bg-gray-500 border-b-2 cursor-pointer p-2  text-center font-semibold">
                Edit Profile
              </h1>
              <h1 className="text-white hover:bg-gray-500 cursor-pointer p-2 text-center font-semibold">
                View History
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
