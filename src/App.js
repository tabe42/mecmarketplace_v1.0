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
      window.location.pathname = "/";
    });
  };

  return (
    <div className="min-h-screen font-mono flex flex-col bg-gradient-to-tr from-gray-200 to-gray-100 pb-20">
    <BrowserRouter>
      <div className="font-mono md:flex flex-col justify-center  pb-20">
        <nav className=" sticky top-0">
          <div className="hidden md:flex text-2xl flex-col md:flex-row justify-between py-4  px-4 bg-gray-800 text-white items-center sticky top-0">
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
          <div className="flex flex-col md:hidden justify-between py-2  px-4 bg-gray-800 text-white items-center sticky top-0 w-full">
            {/* <Link to="/" className="">
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
          </div> */}
              <div className="mb-1 text-lg animate-pulse font-medium"> 
                <Link to="/" className="">
                  mecmarketplace
                </Link></div>
              <div className="flex flex-row w-full text-center font-medium text-sm justify-center h-auto">
                <div className="text-gray-100 hover:bg-gray-50 hover:text-gray-800 px-2 py-2 w-1/3 rounded-xl mx-1 flex items-center justify-center shadow-md"><Link to="/addProduct">Sell</Link></div>
                <div className="text-gray-100 hover:bg-gray-50 hover:text-gray-800 px-2 py-2 w-1/3 rounded-xl mx-1 flex items-center justify-center shadow-md"><Link to="/products">Shop</Link></div>
                <div className="text-gray-100 hover:bg-gray-50 hover:text-gray-800 px-2 py-2 w-1/3 rounded-xl mx-1 flex items-center justify-center shadow-md">
                {!isAuth ? (
                <Link to="/login">Login</Link>
                ) : (
                  <>
                  <button onClick={signUserOut}>Logout</button>
                </>
              )}
                </div>
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
