"use client";
import React, { useState } from "react";
import ProductSlide from "./components/ProductSlide";
import Products from "./components/Products";
import { ProductsArray } from "./data/products2";
import ProductSlide3 from "./components/ProductSlide3";
import ProductSlide4 from "./components/ProductSlide4";
import ProductSlide5 from "./components/ProductSlide5";
import ProductSlide1 from "./components/ProductSlide1";
import ProductSlide2 from "./components/ProductSlide2";

const Home = () => {
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // const handleProductClick = (productId: number) => {
  //   setSelectedProduct(product || null);
  // };

  // const handleCloseSlide = () => {
  //   setSelectedProduct(null);
  // };

  return (
    <>
      <Products />

      {/* <ProductSlide2 /> */}
    </>
  );
};

export default Home;
