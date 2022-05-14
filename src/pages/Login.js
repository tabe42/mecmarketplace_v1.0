import React from "react";
import box from "../images/croppedbox.gif";
import conveyorbox from "../images/conveyor2.gif";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/products");
    });
  };

  return (
    <div className="max-w-[800px] w-full flex flex-col justify-center items-center space-y-2 md:space-x-4 p-4  md:h-screen md:w-full md:mt-[-50px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <img
          className=" md:h-auto w-1/2 md:w-1/3"
          src={conveyorbox}
          alt="box"
        />
        <div className="flex flex-col items-center  justify-center space-y-2">
          <p>Sign in to unlock all features!</p>
          <button
            onClick={signInWithGoogle}
            className="bg-blue-600 text-white p-2 rounded-md shadow-xl"
          >
            Sign in With Google
          </button>
          {/* <div className="flex flex-col items-center   space-y-2">
        <p className="self-center">
          Sign in to list your own product on mecmarketplace.com
        </p>
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Sign in With Google
        </button> */}
        </div>
      </div>
    </div>
  );
};
