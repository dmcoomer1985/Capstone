import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import ProductList from "./components/Products";
import Cart from "./components/Cart";
export default function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      setProducts(responseJson);

      //sortProducts(responseJson);
      //sortProducts(products);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <NavBar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
          <Route
            path="/products"
            element={
              <ProductList
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                products={products}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                products={products}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
