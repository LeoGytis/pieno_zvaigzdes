import React from "react";

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

interface ProductSlideProps {
  product: ProductType;
  onClose: () => void;
}

const ProductSlide: React.FC<ProductSlideProps> = ({ product, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50">
      <div className="flex justify-center h-full">
        <div className="w-3/4 bg-white p-8 rounded-lg">
          <div className="flex justify-end">
            <button className="text-3xl p-2" onClick={onClose}>
              &#10005;
            </button>
          </div>
          <h1 className="text-2xl mb-4">{product.title}</h1>
          <div className="text-sm text-slate-600">
            <p>{product.description_header}</p>
            <p>Subtitle: {product.subtitle}</p>
            <p>Awards: {product.awards.join(", ")}</p>
            <p>Energy Value: {product.energy_value.value}</p>
            <p>Fats: {product.energy_value.fats}</p>
            <p>Fats More: {product.energy_value.fats_more}</p>
            <p>Carbs: {product.energy_value.carbs}</p>
            <p>Carbs Sugar: {product.energy_value.carbs_sugar}</p>
            <p>Proteins: {product.energy_value.proteins}</p>
            <p>Salt: {product.energy_value.salt}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
