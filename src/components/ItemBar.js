import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../firebase-config";

export const ItemBar = ({
  imageurl,
  productname,
  contact,
  description,
  name,
  id,
  price,
  deleteProduct,
  isAuth,
  productsellerid,
}) => {
  return (
    <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row items-start bg-white text-gray-700  p-4 rounded-md shadow-lg w-3/4 md:w-1/2">
      <img src={imageurl} alt="error" className="h-1/3 md:w-1/3 rounded-md shadow-sm " />
      <div className=" block w-full py-4">
      <div className="flex-col pl-4 font-medium space-y-2 justify-start w-full block">
      <div className="flex flex-row w-full justify-between font-bold text-xl ">
        <p className="">{productname}</p>
        <p className="font-bold text-lg w-1/5">{price}</p>
      </div>
        <p>Seller: {name}</p>
        <p>Contact: {contact}</p>
        <p>{description}</p>
      {isAuth && productsellerid === auth.currentUser.uid && (
        <button
          onClick={() => {
            deleteProduct(id);
          }}
          className="bg-white p-2 rounded-md  text-blue-600 hover:bg-gray-200 ml-auto self-end "
        >
          Delete
        </button>
      )}
      </div>
      </div>

    </div>
  );
};
