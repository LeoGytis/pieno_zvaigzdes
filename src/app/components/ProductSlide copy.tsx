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
            <h1 className="text-5xl leading-8 font-bold text-[#113b85] mb-4">
              {product.title}
            </h1>
            <div className="text-sm text-[#808080]">{product.subtitle}</div>
            <div className="py-6">Awards: {product.awards.join(", ")}</div>
            <div className="font-bold text-[#113b85] mb-2 border-b border-gray-300 pb-2">
              Energetinė vertė (100g)
            </div>
            <ProductDetailRow
              label="Energetinė vertė"
              value={product.energy_value.value}
            />
            <ProductDetailRow
              label="Riebalai"
              value={product.energy_value.fats}
            />
            <ProductDetailRow
              label="iš kurių sočiųjų riebalų rūgščių"
              value={product.energy_value.fats_more}
            />
            <ProductDetailRow
              label="Angliavandeniai"
              value={product.energy_value.carbs}
            />
            <ProductDetailRow
              label="iš kurių cukrų"
              value={product.energy_value.carbs_sugar}
            />
            <ProductDetailRow
              label="Baltymai"
              value={product.energy_value.proteins}
            />
            <ProductDetailRow
              label="Druska"
              value={product.energy_value.salt}
            />
            <div className="font-bold text-[#113b85] py-4">
              Produkto aprašymas
            </div>
            <div className="flex justify-between text-[#808080] pb-2 mb-2">
              <p className="text-[#808080]">{product.description_header}</p>
            </div>
            <div className="flex justify-between text-[#808080] pb-2 mb-2">
              <p className="text-[#808080]">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
