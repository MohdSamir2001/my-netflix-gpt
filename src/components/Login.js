import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();
  const [passwordError, setpasswordError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const errorValue = checkValidateData(
      email.current.value,
      password.current.value
    );
    if (errorValue === 1) {
      setEmailError("Please enter valid email !!");
      return;
    }
    if (errorValue === 2) {
      setpasswordError("Incorrect password !!");
      return;
    }
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current.value,
            photoURL:
              "https://th.bing.com/th?q=Netflix+User+Face+Icon.+Download&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setEmailError("Error to update");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailError("User not found with this email");
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="bg-[#170D11] text-white">
      <div className="z-20">
        <Header />
      </div>
      <div className="p-16 py-24 z-15">
        <div className="flex justify-center">
          <div className="absolute z-10 rounded-lg top-40 bg-[#050302] px-8 py-12 bg-opacity-90 w-3/12">
            <h1 className="text-4xl mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              {!isSignIn && (
                <input
                  ref={name}
                  placeholder="Enter Full Name"
                  className="p-4 rounded-md font-semibold bg-transparent border-[1px] border-white w-full"
                  type="text"
                />
              )}
              <input
                ref={email}
                onClick={() => setEmailError("")}
                placeholder="Enter your email or Mobile Number"
                className="p-4 mt-4 rounded-md font-semibold bg-transparent border-[1px] border-white w-full"
                type="text"
              />
              <p className="font-semibold text-red-600">{emailError}</p>
              <input
                ref={password}
                onClick={() => setpasswordError("")}
                placeholder="Enter your password"
                className="p-4 rounded-md mt-4 font-semibold bg-transparent border-[1px] border-white w-full"
                type="password"
              />
              <p className="font-semibold text-red-600">{passwordError}</p>
              <button
                onClick={handleButtonClick}
                className="p-3 rounded-md mt-4 w-full font-semibold bg-[#E50914]"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
              <div className="mt-4 ">
                <div className="text-center">
                  {isSignIn ? "New to Netflix ?" : "if already registered ?"}
                </div>
                <div
                  onClick={toggleSignIn}
                  className="font-semibold text-center cursor-pointer"
                >
                  {isSignIn ? "Sign Up." : "Sign In"}
                </div>
              </div>{" "}
            </form>
          </div>
        </div>
        <img
          className="rounded-lg -z-20 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/IN-en-20241202-TRIFECTA-perspective_052fb757-35ce-4655-946e-3c9ffac95fd0_small.jpg"
          alt="background image"
        />
      </div>
    </div>
  );
};

export default Login;
