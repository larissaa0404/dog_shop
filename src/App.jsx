import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import Register from "./components/pages/Register";
import Logout from "./components/pages/Logout";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <div className="App">
      <ShopContextProvider> 
         <Header /> 
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/logout" element={<Logout />}/>
         </Routes>
         <Footer />
      </ShopContextProvider>    
    </div>
  );
}

export default App;