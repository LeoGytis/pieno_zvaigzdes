import Image from "next/image";
import React from "react";

export interface LogisticInformation {
  primary_packaging: string;
  label: string;
  method: string;
  img: string;
}

export interface PaletteDetails {
  units_per_palette: string;
  units_per_layer: string;
  layers: string;
  palette_net: string;
  palette_size: string;
  img: string;
}

export interface Product {
  id: number;
  title: string;
  img: string;
  labeling: {
    title: string;
    ingredients: string;
    nutrition: string;
  };
  storage_conditions: string;
  logistic_information: LogisticInformation;
  palette_details: PaletteDetails;
}

interface ProductsProps {
  products: Product[];
  handleProductClick: (productId: number) => void;
}

const Products = ({ products, handleProductClick }: ProductsProps) => {
  return (
    <div className="w-full md:max-h-64 flex flex-col md:flex-row justify-between bg-white p-7 pt-12 pb-14">
      <div className="flex md:w-1/5 flex-col gap-4 justify-center items-center md:items-start pl-8">
        <h1 className="text-2xl text-[#616161] font-medium">Our products</h1>
        <h3 className="italic text-[#1B3C80] underline underline-offset-2">
          Assortiment
        </h3>
      </div>
      <div className="flex gap-6 md:w-4/5 flex-col md:flex-row justify-around">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center align-center hover:cursor-pointer m-4"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="flex h-32 w-28 md:h-20 md:w-12 lg:h-28 lg:w-16 pb-4">
              <Image
                src={product.img}
                alt={product.title}
                width={500}
                height={500}
              />
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
