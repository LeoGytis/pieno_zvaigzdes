import React from "react";

export interface Product {
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

interface ProductSlideProps {
  product: Product | null;
  onCloseSlide: () => void;
}

const ProductSlide: React.FC<ProductSlideProps> = ({
  product,
  onCloseSlide,
}) => {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
      <div className="bg-white w-3/4 h-full transform -translate-x-1/5 transition-transform duration-1000 animate-product-slide">
        <div className="flex justify-end pt-2 pr-4">
          <button
            className="text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-black"
            onClick={onCloseSlide}
          >
            &#10005;
          </button>
        </div>
        <div className="flex h-full">
          <div className="flex w-1/2 p-40">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="w-1/2 text-sm text-slate-600 py-5 px-20">
            <h1 className="text-5xl leading-8 font-bold text-[#113b85] mb-4">
              {product.title}
            </h1>
            <div className="text-sm text-[#808080]">{product.subtitle}</div>
            <div className="py-6">Awards: {product.awards.join(", ")}</div>
            <div className="font-bold text-[#113b85] mb-2 border-b border-gray-300 pb-2">
              Energetinė vertė (100g)
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p>Energetinė vertė</p>
              <p className="text-[#808080]">{product.energy_value.value}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p>Riebalai</p>
              <p className="text-[#808080]">{product.energy_value.fats}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p> iš kurių sočiųjų riebalų rūgščių</p>
              <p className="text-[#808080]">{product.energy_value.fats_more}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p>Angliavandeniai</p>
              <p className="text-[#808080]">{product.energy_value.carbs}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p> iš kurių cukrų</p>
              <p className="text-[#808080]">
                {product.energy_value.carbs_sugar}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p>Baltymai</p>
              <p className="text-[#808080]">{product.energy_value.proteins}</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
              <p>Druska</p>
              <p className="text-[#808080]">{product.energy_value.salt}</p>
            </div>
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
