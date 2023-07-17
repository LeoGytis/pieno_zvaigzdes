"use client";
import ProductSlide from "./components/ProductSlide";
import Products from "./components/Products";
import { ProductsArray } from "./data/products";

export default function Home() {
  return (
    <>
      <Products products={ProductsArray} />
      <ProductSlide />
    </>
  );
}

// deploy versel

// import it in server side (page.tsx file)
// set state for product slide
