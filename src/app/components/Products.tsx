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
      <div className="flex gap-6 md:w-4/5 flex-col md:flex-row justify-around">
        <div
          className="flex flex-col items-center align-center hover:cursor-pointer m-4"
          onClick={() => handleProductClick(0)} // Pass index of the slide component
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
        {/* Add more product items here */}
      </div>
      {selectedSlideIndex !== null && (
        <div className="border border-orange-600 fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
          {slideComponents[selectedSlideIndex]}
          <div className="flex justify-end pt-2 pr-4">
            <button
              className="text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-black"
              onClick={closeSlide}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
