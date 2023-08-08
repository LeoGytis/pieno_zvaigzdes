import Image from "next/image";
import React, { ReactNode } from "react";

export interface ProductSlideProps {
  onClose: () => void;
}

interface ProductSlideContainerProps {
  onClose: () => void;
  children: ReactNode;
  productImage?: any;
}

const ProductSlideContainer = ({
  onClose,
  children,
  productImage,
}: ProductSlideContainerProps) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center"
      onClick={onClose}
    >
      <div
        className="bg-white xl:w-11/12 h-full overflow-auto transform transition-transform duration-1000 animate-product-slide"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-end pt-2 pr-4">
          <button
            className="text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-black"
            onClick={onClose}
          >
            &#10005;
          </button>
        </div>

        <div className="flex flex-col xl:flex-row h-full">
          <div className="flex justify-center xl:w-1/2 h-1/2 xl:h-full p-4 xl:p-20">
            <Image
              src={productImage}
              alt="product_image"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductSlideContainer;
