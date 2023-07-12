import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ProductsArray } from "../data/products";

const ProductSlide = dynamic(() => import("./ProductSlide"), {
  ssr: false,
});

const ClientProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleCloseSlide = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white p-4">
      <div className="flex md:w-1/5 flex-col justify-center items-center md:items-start pb-4 md:pb-0 text-slate-600">
        <h1 className="text-xl">Our products</h1>
        <h3 className="text-sm underline underline-offset-2">Assortment</h3>
      </div>
      <div className="flex md:w-4/5 flex-col md:flex-row justify-around">
        {ProductsArray.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center align-center m-4"
            onClick={() => handleProductClick(product)}
          >
            <div className="flex h-32 w-28 md:h-20 md:w-12 lg:h-28 lg:w-16 pb-4">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="text-sm text-center text-slate-600">
              {product.title}
            </div>
          </div>
        ))}
      </div>
      {typeof window !== "undefined" && (
        <ProductSlide product={selectedProduct} onClose={handleCloseSlide} />
      )}
    </div>
  );
};

export default ClientProducts;
