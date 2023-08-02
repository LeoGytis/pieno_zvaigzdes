import React, { useEffect, useRef } from "react";
import Image from "next/image";

export interface LogisticInformation {
  primary_packaging: string;
  label: string;
  method: string;
}

export interface PaletteDetails {
  units_per_palette: string;
  units_per_layer: string;
  layers: string;
  palette_net: string;
  palette_size: string;
}

export interface Product {
  id: number;
  title: string;
  img: string;
  energy_values: string;
  storage_conditions: string;
  logistic_information: LogisticInformation;
  palette_details: PaletteDetails;
}
interface ProductSlideProps {
  product: Product | null;
  onCloseSlide: () => void;
}

const ProductSlide = ({ product, onCloseSlide }: ProductSlideProps) => {
  const productSlideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        productSlideRef.current &&
        !productSlideRef.current.contains(event.target as Node)
      ) {
        onCloseSlide();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onCloseSlide]);

  if (!product) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
      <div
        className="bg-white md:w-11/12 h-full overflow-auto transform transition-transform duration-1000 animate-product-slide"
        ref={productSlideRef}
        onClick={(event) => event.stopPropagation()}
      >
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
            <Image
              src={product.img}
              alt={product.title}
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="md:w-1/2 text-sm text-blue pl-16 pr-28 py-5 lg:py-16">
            <h1 className="text-6xl font-bold mb-10">{product.title}</h1>
            <div>
              <h2 className="font-bold mb-6">LABELING</h2>
              {/* <p className="text-grey">{product.labeling.title}</p>
              <p className="text-grey">{product.labeling.ingredients}</p>
              <p className="text-grey mb-14">{product.labeling.nutrition}</p> */}
            </div>

            <div>
              <h2 className="font-bold text-blue mb-6">
                SHELF LIFE AND STORAGE CONDITIONS
              </h2>
              <p className="text-grey mb-14">{product.storage_conditions}</p>
            </div>

            <div>
              <h2 className="font-bold text-blue mb-6">Logistic information</h2>
              <div className="flex">
                <p className="font-bold text-grey mb-2">
                  Primary packaging:&nbsp;
                </p>
                <p className="text-grey mb-2">
                  {product.logistic_information.primary_packaging}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold text-grey mb-2">Label:&nbsp;</p>
                <p className="text-grey mb-2">
                  {product.logistic_information.label}
                </p>
              </div>

              <div className="flex">
                <p className="font-bold text-grey mb-2">Method:&nbsp;</p>
                <p className="text-grey mb-14">
                  {product.logistic_information.method}
                </p>
              </div>
            </div>
            {/* <div className="flex gap-10 mb-14">
              <Image
                src={product.logistic_information.img}
                alt="logistic_box"
                width={100}
                height={100}
              />
            </div> */}

            <div className="pb-14">
              <h2 className="font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                Palette details
              </h2>
              <div className="flex justify-between border-b border-gray-300 text-grey pb-4 mb-4">
                <p className="text-blue">Units per palette</p>
                <p className="text-grey">
                  {product.palette_details.units_per_palette}
                </p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-grey pb-4 mb-4">
                <p className="text-blue">Units per layer</p>
                <p className="text-grey">
                  {product.palette_details.units_per_layer}
                </p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-grey pb-4 mb-4">
                <p className="text-blue">Layers</p>
                <p className="text-grey">{product.palette_details.layers}</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-grey pb-4 mb-4">
                <p className="text-blue">Palette net</p>
                <p className="text-grey">
                  {product.palette_details.palette_net}
                </p>
              </div>
              <div className="flex justify-between border-b border-gray-300 text-grey pb-4 mb-4">
                <p className="text-blue">Size (LxWxH), mm</p>
                <p className="text-grey">
                  {product.palette_details.palette_size}
                </p>
              </div>
            </div>
            {/* <div className="mb-14">
              <Image
                src={product.palette_details.img}
                alt="palette_size"
                width={110}
                height={75}
              />
            </div> */}

            <div className="flex flex-col text-black gap-7 pb-20">
              <h2 className="font-bold text-blue">Contact Us</h2>
              <p className="-mb-3">info@svala.com</p>
              <p className="-mb-3">852461414</p>
              <p className="-mb-3">pienozvaigzdes.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
