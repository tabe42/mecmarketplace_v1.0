import { deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { ItemBar } from "../components/ItemBar";

export const Products = ({ isAuth }) => {
  const [productList, setProductList] = useState([]);
  const deleteProduct = async (pid) => {
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
  }, []);

  return (
    <div className="flex flex-col space-y-4 mt-4 mx-4 items-center">
      {productList.map((product) => {
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
