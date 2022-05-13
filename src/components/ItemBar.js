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
    <div className=" flex flex-row justify-between items-center space-x-5  bg-blue-600 text-white  p-4 rounded-md shadow-lg w-1/2 relative">
      <img src={imageurl} alt="error" className="w-1/3  " />
      <div className="flex flex-col">
        <p>{productname}</p>
        <p>Seller: {name}</p>
        <p>Contact: {contact}</p>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>
      <div>
        {isAuth && productsellerid === auth.currentUser.uid && (
          <button
            onClick={() => {
              deleteProduct(id);
            }}
            className="bg-white p-2 rounded-md self-start text-blue-600"
          >
            Delete
          </button>
        )}
      </div>

      {/* <button className="bg-red-600 p-2 absolute top-0 right-0">delete</button> */}
    </div>
  );
};
