import React from "react";
import { Link } from "react-router-dom";
import box from "../images/croppedbox.gif";

export const Landing = () => {
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center h-screen space-x-40 ">
      <div>
        <img
          className="max-w-sm md:max-w-lg "
          src={box}
          alt="pictureofdeliverybox"
        />
      </div>
      <div className="flex flex-col justify-between items-center space-y-4">
        <p className="text-3xl">Welcome to the MecMarketplace!</p>
        <p className="max-w-lg">
          Do you have old textbooks lying around which you'd like to sell but
          you're too lazy to find the right people to sell it to? Do you want to
          maybe try and make a sale (and possibly a job) out of your skills?
          Heck, do you happen to have a kitten that is up for adoption?
          <br />
          Well, You've come to the right place!
        </p>
        <Link to="/products">
          <button className="bg-blue-600 px-4 py-2 text-white self-start rounded-lg hover:bg-blue-500">
            Browse the shop
          </button>
        </Link>
      </div>
    </div>
  );
};
