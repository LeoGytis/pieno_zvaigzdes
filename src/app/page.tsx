"use client";
import React, { useState } from "react";
import ProductSlide from "./components/ProductSlide";
import Products, { Product } from "./components/Products";
import { ProductsArray } from "./data/products2";
import ProductSlide3 from "./components/ProductSlide3";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (productId: number) => {
    const product = ProductsArray.find((product) => product.id === productId);
    setSelectedProduct(product || null);
  };

  const handleCloseSlide = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Products
        products={ProductsArray}
        handleProductClick={handleProductClick}
      />
      {selectedProduct && (
        <ProductSlide
          product={selectedProduct}
          onCloseSlide={handleCloseSlide}
        />
      )}
      <ProductSlide3 />
    </>
  );
};

export default Home;
