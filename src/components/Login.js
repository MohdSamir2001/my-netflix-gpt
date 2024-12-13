import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
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
          // ...
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
