import React from "react";

interface ProductDetailRowProps {
  label: string;
  value: string;
}

const ProductDetailRow = ({ label, value }: ProductDetailRowProps) => {
  return (
    <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-2 mb-2">
      <p>{label}</p>
      <p className="text-[#808080]">{value}</p>
    </div>
  );
};

export default ProductDetailRow;
