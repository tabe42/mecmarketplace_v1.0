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
      <div className="font-mono flex flex-col">
        <nav>
          <div className="flex flex-row justify-between py-2 px-4 bg-blue-600 text-white text-xl items-center sticky top-0">
            <Link to="/" className="text-xl">
              mecmarketplace
            </Link>
            <div className="flex flex-row space-x-10">
              <Link to="/products">Browse</Link>
              {!isAuth ? (
                <Link to="/login">Login</Link>
              ) : (
                <>
                  <Link to="/addProduct">Add Product</Link>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
