import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Landing } from "./pages/Landing";
import { Products } from "./pages/Products";
import { AddProduct } from "./pages/AddProduct";
import { Login } from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { MyProducts } from "./pages/MyProducts";
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
    <BrowserRouter>
      <div className="font-mono flex flex-col justify-center">
        <nav>
          <div className="flex  flex-col md:flex-row justify-between py-2 px-4 bg-blue-600 text-white text-xl items-center sticky top-0">
            <Link to="/" className="text-2xl">
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
  );
}

export default App;
