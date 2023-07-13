"use client";
import React, { useState } from "react";
import { ProductsArray } from "../data/products";

export interface ProductType {
  id: number;
  title: string;
  description_header: string;
  img: string;
  subtitle: string;
  awards: string[];
  energy_value: {
    value: string;
    fats: string;
    fats_more: string;
    carbs: string;
    carbs_sugar: string;
    proteins: string;
    salt: string;
  };
  description: string;
}

const Prod: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(
    {} as ProductType
  );

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleCloseSlide = () => {
    setSelectedProduct({} as ProductType);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white p-4">
      <div className="flex md:w-1/5 flex-col justify-center items-center md:items-start pb-4 md:pb-0 text-slate-600">
        <h1 className="text-xl">Our products</h1>
        <h3 className="text-sm underline underline-offset-2">Assortment</h3>
      </div>
      <div className="flex md:w-4/5 flex-col md:flex-row justify-around">
        {ProductsArray.map((product: any) => (
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
      {Object.keys(selectedProduct).length > 0 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
          <div className="bg-white w-3/4 h-full transform -translate-x-1/5 transition-transform duration-1000 animate-slide-in">
            <div className="flex justify-end pt-2 pr-4">
              <button
                className="text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-black"
                onClick={handleCloseSlide}
              >
                &#10005;
              </button>
            </div>
            <div className="flex h-full">
              <div className="flex w-1/2 p-40 border-2 border-lime-600">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="w-1/2 text-sm text-slate-600 p-20 border-2 border-orange-500">
                <h1 className="text-3xl leading-3 font-bold text-[#113b85] mb-4">
                  {selectedProduct.title}
                </h1>
                <div className="text-sm text-[#808080]">
                  {selectedProduct.subtitle}
                </div>
                <div className="py-6">
                  Awards: {selectedProduct.awards.join(", ")}
                </div>
                <div className="font-bold text-[#113b85]">
                  Energetinė vertė (100g):
                  <p className="font-normal text-[#808080]">
                    {selectedProduct.energy_value.value}
                  </p>
                </div>
                <div>Fats: {selectedProduct.energy_value.fats}</div>
                <div>Fats More: {selectedProduct.energy_value.fats_more}</div>
                <div>Carbs: {selectedProduct.energy_value.carbs}</div>
                <div>
                  Carbs Sugar: {selectedProduct.energy_value.carbs_sugar}
                </div>
                <div>Proteins: {selectedProduct.energy_value.proteins}</div>
                <div>Salt: {selectedProduct.energy_value.salt}</div>
                <div className="font-bold text-[#113b85]">
                  Produkto aprašymas: {selectedProduct.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prod;
