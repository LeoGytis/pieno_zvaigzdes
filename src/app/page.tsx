"use client";
import React, { useState } from "react";
import ProductSlide, { Product } from "./components/ProductSlide";
import Products from "./components/Products";
import { ProductsArray } from "./data/products";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  const handleCloseSlide = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      <Products
        products={ProductsArray}
        handleProductClick={handleProductClick}
      />
      <ProductSlide
        products={ProductsArray}
        productId={selectedProductId}
        onCloseSlide={handleCloseSlide}
      />
    </>
  );
}

// deploy versel
