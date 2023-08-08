import React, { ReactNode } from "react";

export interface ProductSlideProps {
  onClose: () => void;
}

interface ProductSlideContainerProps {
  onClose: () => void;
  children: ReactNode;
}

const ProductSlideContainer = ({
  onClose,
  children,
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
        <div className="flex flex-col xl:flex-row h-full">{children}</div>
      </div>
    </div>
  );
};

export default ProductSlideContainer;
