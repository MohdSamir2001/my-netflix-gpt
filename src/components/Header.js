import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
          <div
            onClick={userSignOut}
            className="mr-6 cursor-pointer py-1 px-4 border-[1px] rounded-full border-white font-semibold"
          >
            Sign Out
          </div>
          <div>
            <img
              className="w-12 rounded-lg cursor-pointer"
              src={user.photoURL}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
