import React from "react";
import { Product } from "./Products";
import ProductDetailRow from "./ProductDetailRow";

interface ProductSlideProps {
  product: Product | null;
  onCloseSlide: () => void;
}

const ProductSlide = ({ product, onCloseSlide }: ProductSlideProps) => {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
      <div className="bg-white md:w-3/4 h-full overflow-auto transform transition-transform duration-1000 animate-product-slide">
        <div className="flex justify-end pt-2 pr-4">
          <button
            className="text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-black"
            onClick={onCloseSlide}
          >
            &#10005;
          </button>
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex justify-center md:w-1/2 p-10 md:p-20 lg:p-40">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="md:w-1/2 text-sm text-slate-600 py-5 px-2 md:px-10 lg:px-20">
            <h1 className="text-6xl font-bold text-[#113b85] mb-10">
              {product.title}
            </h1>
            <div>
              <h2 className="font-bold text-[#113b85] mb-6">
                LABELING, SHELF LIFE, STORAGE CONDITIONS
              </h2>
              <p className="text-[#808080] mb-14">{product.energy_values}</p>
            </div>

            <div>
              <h2 className="font-bold text-[#808080] mb-6">
                SHELF LIFE AND STORAGE CONDITIONS:
              </h2>
              <p className="text-[#808080] mb-14">{product.energy_values}</p>
            </div>

            <div>
              <h2 className="font-bold text-[#113b85] mb-6">
                Logistic information
              </h2>
              <p className="text-[#808080] mb-2">
                {product.logistic_information}
              </p>
              <p className="text-[#808080] mb-2">{product.primary_packaging}</p>
              <p className="text-[#808080] mb-14">{product.method}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
