import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const AddProduct = ({ isAuth }) => {
  const [productname, setProductname] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const productCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const addProduct = async () => {
    await addDoc(productCollectionRef, {
      productname,
      contact,
      description,
      seller: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/products");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="flex h-screen ">
      <div className="m-auto">
        <div className="flex flex-col space-y-4 justify-center   bg-gray-100  shadow-md rounded-md p-8 w-fit h-fit">
          <input
            className="border-2 p-2 rounded-md"
            placeholder="Name of product"
            onChange={(e) => {
              setProductname(e.target.value);
            }}
          />
          <input
            className="border-2 p-2 rounded-md"
            placeholder="Contact information(phone/email)"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <textarea
            cols="40"
            rows="9"
            className="border-2 p-2 rounded-md resize-none"
            placeholder="Brief product description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={addProduct}
            className=" self-center bg-blue-600 p-2 text-white shadow-md rounded-md"
          >
            List Item{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
