// Products.js
import Image from "next/image";
import React, { useState } from "react";
import ProductSlide1 from "./ProductSlide1";
import ProductSlide2 from "./ProductSlide2";

const Products = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);

  const handleProductClick = (slideIndex: any) => {
    setSelectedSlideIndex(slideIndex);
  };

  const closeSlide = () => {
    setSelectedSlideIndex(null);
  };

  const slideComponents = [
    <ProductSlide1 onClose={closeSlide} />,
    <ProductSlide2 onClose={closeSlide} />,
  ];

  return (
    <div className="w-full md:max-h-64 flex flex-col md:flex-row justify-between bg-white p-7 pt-12 pb-14">
      <div className="flex md:w-1/5 flex-col gap-4 justify-center items-center md:items-start pl-8">
        <h1 className="text-2xl text-[#616161] font-medium">Our products</h1>
        <h3 className="italic text-[#1B3C80] underline underline-offset-2">
          Assortiment
        </h3>
      </div>
      <div className="flex gap-6 md:w-4/5 flex-col md:flex-row justify-around">
        {/* --- First Product --- */}
        <div
          className="flex flex-col items-center align-center hover:cursor-pointer m-4"
          onClick={() => handleProductClick(0)}
        >
          <div className="flex h-32 w-28 md:h-20 md:w-12 lg:h-28 lg:w-16 pb-4">
            <Image
              src="/images/milk_powder/milk_powder.png"
              alt="Milk Powder"
              width={500}
              height={500}
            />
          </div>
          <div className="text-sm text-center text-slate-600">
            Svalaya Skimmed Milk Powder
          </div>
        </div>
        {/* --- Second Product --- */}
        <div
          className="flex flex-col items-center align-center hover:cursor-pointer m-4"
          onClick={() => handleProductClick(1)}
        >
          <div className="flex h-32 w-28 md:h-20 md:w-12 lg:h-28 lg:w-16 pb-4">
            <Image
              src="/images/milk_powder/milk_powder.png"
              alt="Milk Whey Powder"
              width={500}
              height={500}
            />
          </div>
          <div className="text-sm text-center text-slate-600">
            Svalaya Wey Powder
          </div>
        </div>
      </div>
      {selectedSlideIndex !== null && (
        <div className="border border-orange-600 fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
          {slideComponents[selectedSlideIndex]}
        </div>
      )}
    </div>
  );
};

export default Products;
