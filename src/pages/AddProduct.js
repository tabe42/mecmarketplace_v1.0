import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const AddProduct = ({ isAuth }) => {
  const [productname, setProductname] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageinput, setImageinput] = useState(null);
  const [imageurl, setImageurl] = useState("");
  const [imagename, setImagename] = useState("");

  const productCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const addProduct = async (url, imagename) => {
    await addDoc(productCollectionRef, {
      imagename,
      imageurl: url,
      productname,
      contact,
      description,
      price,
      seller: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    // navigate("/products");
  };

  const uploadImage = async () => {
    if (imageinput == null || productname == "" || contact == "" || price == "")
      return;
    const imgname = imageinput.name + v4();
    console.log(imgname);
    setImagename(imgname);
    const imageRef = ref(storage, `images/${imgname}`);
    uploadBytes(imageRef, imageinput).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageurl(url);
        addProduct(url, imgname);
        navigate("/products");
      });
      // alert("image uploaded");
    });
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
            required
            id="files"
            type="file"
            onChange={(e) => {
              setImageinput(e.target.files[0]);
            }}
          />

          <input
            required
            className="border-2 p-2 rounded-md"
            placeholder="Name of product"
            onChange={(e) => {
              setProductname(e.target.value);
            }}
          />
          <input
            required
            className="border-2 p-2 rounded-md"
            placeholder="Contact information(phone/email)"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <input
            required
            type="number"
            placeholder="Price"
            className="border-2 p-2 rounded-md"
            onChange={(e) => {
              setPrice(e.target.value);
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
            onClick={uploadImage}
            className=" self-center bg-blue-600 p-2 text-white shadow-md rounded-md"
          >
            List Item{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
