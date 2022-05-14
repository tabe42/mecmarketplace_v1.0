import React from "react";
import { Link } from "react-router-dom";
import box from "../images/croppedbox.gif";
import Typed from "react-typed";

export const Landing = () => {
  return (
    // <div className="flex flex-col  md:flex-row justify-center items-center md:h-screen md:space-x-40 mb-2 ">
    //   <img
    //     className="max-w-sm md:max-w-lg "
    //     src={box}
    //     alt="pictureofdeliverybox"
    //   />

    //   <div className="flex flex-col justify-center md:items-start items-center space-y-4">
    //     <p className="text-3xl"> MecMarketplace</p>
    //     <p className="max-w-lg mx-4 md:mx-0">
    //       Do you have old textbooks lying around which you'd like to sell but
    //       you're too lazy to find the right people to sell it to? Do you want to
    //       maybe try and make a sale (and possibly a job) out of your skills?
    //       Heck, do you happen to have a kitten that is up for adoption?
    //       <br />
    //       Well, You've come to the right place!
    //     </p>
    //     <Link to="/products">
    //       <button className="bg-blue-600 px-4 py-2 text-white self-start rounded-lg hover:bg-blue-500">
    //         Browse the shop
    //       </button>
    //     </Link>
    //   </div>
    // </div>

    <div className="max-w-[800px] md:h-screen md:mt-[-50px] w-full mx-auto justify-center flex flex-col text-black mt-4">
      <div className="flex flex-col items-center md:flex-row md:space-x-10">
        <img className="w-1/2 md:w-1/3 md:h-full  " src={box} alt="box" />
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
          <p className="text-3xl md:text-6xl">MecMarketplace</p>
          <div className="flex text-3xl ">
            <p>One stop shop to</p>
            <Typed
              className="pl-2 text-blue-600"
              strings={["buy", "sell", "trade"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
          <p className="text-3xl">For MECians</p>
          <Link to="/products">
            <button className="bg-blue-600 px-4 py-2 text-white self-start rounded-lg hover:bg-blue-500">
              Browse the shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
