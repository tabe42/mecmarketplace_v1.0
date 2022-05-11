import { deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { ItemBar } from "../components/ItemBar";

export const Products = ({ isAuth }) => {
  const [productList, setProductList] = useState([]);
  const [randstate, setRandstate] = useState(0);
  const [query, setQuery] = useState("");
  const deleteProduct = async (pid) => {
    setRandstate(randstate + 1);
    const productDoc = doc(db, "products", pid);
    await deleteDoc(productDoc);
  };

  const productCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      console.log("hi", data);
      setProductList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, [randstate]);

  const filteredproductList = productList.filter((product) => {
    return product.productname.includes(query);
  });

  return (
    <div className="flex flex-col space-y-4 mt-4 mx-4 items-center">
      <div className=" flex flex-row justify-between px-2 items-center border-2 w-1/2 rounded-md">
        <input
          className=" p-1 rounded-md w-full focus:outline-none "
          placeholder="search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="flex flex-row space-x-2 items-center justify-center">
          <p className="">&#128269;</p>
        </div>
      </div>

      {filteredproductList.map((product) => {
        return (
          <ItemBar
            key={product.id}
            productname={product.productname}
            contact={product.contact}
            description={product.description}
            name={product.seller.name}
            id={product.id}
            deleteProduct={deleteProduct}
            productsellerid={product.seller.id}
            isAuth={isAuth}
          />
        );
      })}
    </div>
  );
};
