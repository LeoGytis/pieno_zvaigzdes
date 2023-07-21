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
      <div className="bg-white md:w-11/12 h-full overflow-auto transform transition-transform duration-1000 animate-product-slide">
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
          <div className="md:w-1/2 text-sm text-slate-600 px-2 md:px-10 lg:px-24 py-5 lg:py-48">
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
            <div className="flex gap-10 mb-14">
              <img src="images/box_size.png" alt="box_sizing" />
              <img src="images/box_size2.png" alt="box_sizing" />
            </div>

            <div className="pb-20">
              <h2 className="font-bold text-[#113B85]  border-b border-gray-300 pb-4 mb-4">
                Palette details
              </h2>
              <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-4 mb-4">
                <p>Units per palette</p>
                <p className="text-[#808080]">{product.units_per_palette}</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-4 mb-4">
                <p>Units per layer</p>
                <p className="text-[#808080]">{product.units_per_layer}</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-4 mb-4">
                <p>Layers</p>
                <p className="text-[#808080]">{product.layers}</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-4 mb-4">
                <p>Palette net</p>
                <p className="text-[#808080]">{product.palette_net}</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-[#808080] pb-4 mb-4">
                <p>Size (LxWxH), mm</p>
                <p className="text-[#808080]">{product.palette_size}</p>
              </div>
            </div>
            <div className="flex flex-col gap-7 pb-20">
              <h2 className="font-bold text-[#113B85] mb-2">Contact Us</h2>
              <p>info@pienozvaigzdes.lt</p>
              <p>852461414</p>
              <h2 className="font-bold text-[#808080]">
                Toll-free quality line:
              </h2>
              <p>880055224</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="text-[#808080]">Lithuania:</div>
                  <div className="text-[#000]">pienozvaigzdes.lt</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#808080]">Global:</div>
                  <div className="text-[#000]">pienozvaigzdes.com</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#808080]">Estonia:</div>
                  <div className="text-[#000]">aasapiim.eu</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#808080]">Latvia:</div>
                  <div className="text-[#000]">annele.lv</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
