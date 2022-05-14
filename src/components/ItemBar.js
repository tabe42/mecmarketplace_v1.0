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
    <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row justify-start items-center   bg-blue-600 text-white  p-4 rounded-md shadow-lg w-3/4 md:w-1/2 ">
      <img src={imageurl} alt="error" className="h-1/3 md:w-1/3  " />
      <div className="flex flex-col pl-4">
        <p>{productname}</p>
        <p>Seller: {name}</p>
        <p>Contact: {contact}</p>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>

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
  );
};
