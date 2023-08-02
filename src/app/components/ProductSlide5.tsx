import ContactUs from "./ContactUs";
import Image from "next/image";
import { ProductSlideProps } from "./ProductSlide1";

const ProductSlide5 = ({ onClose }: ProductSlideProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-start items-center">
      <div
        className="bg-white md:w-11/12 h-full overflow-auto transform transition-transform duration-1000 animate-product-slide"
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
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex justify-center md:w-1/2 p-10 md:p-20 lg:p-40">
            <Image
              src="/images/mozzarella_pizza/mozzarella.png"
              alt="Svalya Pizza Mozzarella"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="md:w-1/2 text-sm text-blue pl-16 pr-28 py-5 lg:py-16">
            <h1 className="text-6xl font-bold mb-10">
              Svalya Pizza Mozzarella 40 %
            </h1>
            <div className="flex max-h-20 gap-6 mb-10">
              <Image
                src="/images/tokens/token_03.png"
                alt="token__"
                width={57}
                height={67}
              />
            </div>
            <div className="text-grey mb-14">
              <h2 className="text-xl font-bold mb-10">
                For grating, shredding, dicing, slicing
              </h2>
              <Image
                src="/images/mozzarella/diced_in_stripes.png"
                alt="token__"
                width={217}
                height={119}
              />
            </div>

            <div className="text-grey mb-14">
              <h2 className="font-bold text-blue mb-6">LABELING</h2>
              <p>
                Cheese product with vegetable fat PIZZA MOZZARELLA, 40% fat in
                dry matter.
              </p>
              <p>
                Ingredients: pasteurized cow’s milk, palm oil 19%, salt, starter
                cultures, microbial rennet.
              </p>
              <p className="text-grey mb-6">
                Nutrition 100 g: energy 1221 kJ / 294 kcal; fat 21,5 g, of which
                saturates 10,0 g; carbohydrate 0,5 g, of which sugars 0,5;
                protein 24,5 g, salt 1,0 g.
              </p>
            </div>
            <div className="text-grey mb-14">
              <h2 className="font-bold text-blue mb-6">
                SHELF LIFE AND STORAGE CONDITIONS
              </h2>
              <p>
                Temperature (0... + 4) °C No longer than 90 days from production
                date.
              </p>
              <p>
                Temperature lower than (-18) °C No longer than 12 months from
                production date.
              </p>
            </div>
            <div className="text-grey leading-7 mb-14">
              <h2 className="font-bold text-blue mb-6">Logistic information</h2>
              <div>
                <strong>Primary packaging:</strong>
                <p className="pl-1">
                  1. Thermo shrinkable bag OSB 5050 BAG 230x550
                </p>
              </div>
              <div>
                <strong>Method:&nbsp;</strong>Soft vacuum
                <p className="pl-1">
                  2. Thermo shrinkable bag OSB 5050 BAG; 4 units in a bag.
                </p>
              </div>
              <div>
                <strong>Method:&nbsp;</strong>
                Soft vacuum
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/moazzarella_strechy/logistic_box.png"
                alt="logistic_box"
                width={204}
                height={101}
              />
            </div>
            <div className="text-grey leading-7 mb-14">
              <div>
                <strong>Secondary ( group) packaging:</strong>
                <p className="pl-1">1. Corrugated carton box size, cm:</p>
                <p>45,0x32,0x10,5 / 4 Units inside</p>
              </div>
              <div>
                <p className="pl-1">2. Corrugated carton box size, cm:</p>
                <p>
                  45,0x32,0x10,5 / 1 Unit inside. Or without carton boxes on the
                  pallet.
                </p>
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/moazzarella_strechy/palette_size.png"
                alt="logistic_box_secondary"
                width={149}
                height={120}
              />
            </div>
            <div className="text-grey pb-14">
              <h2 className="flex justify-center gap-24 font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                <p>60 units per palette</p>
                <p>83 units per palette</p>
              </h2>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per palette</p>
                <p className="w-40">60</p>
                <p>83</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per layer</p>
                <p className="w-40">5</p>
                <p>5</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Layers</p>
                <p className="w-40">12</p>
                <p>17</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Palette net</p>
                <p className="w-40">720 kg</p>
                <p>1000 kg</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Size (LxW), mm</p>
                <p className="w-40">1200.800</p>
                <p>1200.800</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Type</p>
                <p className="w-40">Wood, EUR, one-way pallet</p>
                <p>Wood, EUR, one-way pallet</p>
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide5;
