import React, { useState } from "react";
export interface Product {
  id: number;
  title: string;
  img: string;
}

interface ProductsComponentProps {
  products: Product[];
}

const Products = ({ products }: ProductsComponentProps) => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsComponentProps>({} as ProductsComponentProps);

  const handleProductClick = (product: ProductsComponentProps) => {
    setSelectedProduct(product);
    console.log("product:", product);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white p-4">
      <div className="flex md:w-1/5 flex-col justify-center items-center md:items-start pb-4 md:pb-0 text-slate-600">
        <h1 className="text-xl">Our products</h1>
        <h3 className="text-sm underline underline-offset-2">Assortment</h3>
      </div>
      <div className="flex md:w-4/5 flex-col md:flex-row justify-around">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col items-center align-center hover:cursor-pointer m-4"
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
    </div>
  );
};

export default Products;
