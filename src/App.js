import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Products } from "./pages/Products";
import { AddProduct } from "./pages/AddProduct";
import { Login } from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { MyListings } from "./pages/MyListings";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="min-h-screen font-mono flex flex-col bg-gradient-to-tr from-yellow-400 to-yellow-300 pb-20">
    <BrowserRouter>
      <div className="font-mono flex flex-col justify-center  pb-20">
        <nav className=" sticky top-0">
          <div className="flex text-2xl flex-col md:flex-row justify-between py-4  px-4 bg-gray-800 text-white items-center sticky top-0">
            <Link to="/" className="">
              mecmarketplace
            </Link>
            <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center">
              <Link to="/products">Browse</Link>
              {!isAuth ? (
                <Link to="/login">Login</Link>
                ) : (
                  <>
                  <Link to="/addProduct">Add Product</Link>
                  <Link to="/mylistings">My Listings </Link>
                  <button onClick={signUserOut}>Logout</button>
                </>
              )}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products isAuth={isAuth} />} />
          <Route path="/addproduct" element={<AddProduct isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/mylistings" element={<MyListings isAuth={isAuth} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
