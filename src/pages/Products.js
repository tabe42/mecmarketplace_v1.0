import { deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { ItemBar } from "../components/ItemBar";
import { deleteObject, ref } from "firebase/storage";

export const Products = ({ isAuth }) => {
  const [productList, setProductList] = useState([]);
  const [randstate, setRandstate] = useState(0);
  const [query, setQuery] = useState("");
  const deleteProduct = async (pid) => {
    const productDoc = doc(db, "products", pid);
    const docSnap = await getDoc(productDoc);
    console.log("snapshot is", docSnap.data());
    const tobedeletedname = docSnap.data().imagename;
    console.log("name to be deleted", tobedeletedname);

    // console.log("deleted doc:", productDoc);

    await deleteDoc(productDoc);
    const imagereference = ref(storage, `images/${tobedeletedname}`);
    // Delete the file
    deleteObject(imagereference)
      .then(() => {
        console.log("image deleted from firebase");
      })
      .catch((error) => {
        console.log(error);
      });
    setRandstate(randstate + 1);
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
    return product.productname.toLowerCase().includes(query);
  });

  return (
    <div className="flex flex-col space-y-4 mt-4 mx-4 items-center mb-4">
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
            price={product.price}
            name={product.seller.name}
            imageurl={product.imageurl}
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
