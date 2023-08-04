import ContactUs from "./ContactUs";
import Image from "next/image";
import { ProductSlideProps } from "./ProductSlide1";

const ProductSlide3 = ({ onClose }: ProductSlideProps) => {
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
          <div className="flex justify-center max-h-96 md:max-h-none md:w-1/2 p-10 md:p-20 lg:p-40">
            <Image
              src="/images/mozzarella_shredded/mozzarella.png"
              alt="Svalya Mozzarella"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="md:w-1/2 text-sm text-blue pl-16 pr-28 py-5 lg:py-16">
            <h1 className="text-6xl font-bold mb-10">Svalya Mozzarella 40 %</h1>
            <div className="flex max-h-20 gap-6 mb-10">
              <div>
                <Image
                  src="/images/tokens/token_01.png"
                  alt="token"
                  width={79}
                  height={77}
                />
              </div>
              <Image
                src="/images/tokens/token_02.png"
                alt="token"
                width={114}
                height={67}
              />
              <Image
                src="/images/tokens/token_03.png"
                alt="token"
                width={57}
                height={67}
              />
            </div>
            <div className="text-grey">
              <h2 className="text-xl font-bold mb-10">
                Available in various forms and sizes IQF and frozen:
              </h2>
              <Image
                src="/images/mozzarella_shredded/diced_in_cubes.png"
                alt="token__"
                width={217}
                height={119}
              />
              <p className="mt-6">Diced in cubes</p>
              <p className="mb-10">
                fraction cuts: 3x3x3 mm, 6x6x6 mm, 10x10x10 mm
              </p>
              <Image
                src="/images/mozzarella_shredded/shredded.png"
                alt="token__"
                width={217}
                height={119}
              />
              <p className="mt-6">Shredded</p>
              <p className="mb-10"> fraction cuts: 3x1, 5x30 mm</p>
              <Image
                src="/images/mozzarella_shredded/diced_in_stripes.png"
                alt="token__"
                width={217}
                height={119}
              />
              <p className="mt-6">Diced in stripes</p>
              <p className="mb-10">fraction cuts: 3x3x10 mm, 3x3x30 mm</p>
            </div>
            <div>
              <h2 className="text-[18px] font-bold mb-6">Labeling</h2>
              <p className="text-grey">
                Diced/ Shredded frozen Cheese „Mozzarella“ 40% fat in dry
                matter.
              </p>
              <p className="text-grey">
                Ingredients: cheese Mozzarella (pasteurized milk, salt, starter
                cultures, microbial rennet), anti-caking agent: starch potato*.
              </p>
              <p className="text-grey mb-6">
                Packaged in a protective atmosphere.Nutrition 100 g: energy 1243
                kJ/299 kcal; fat 21,5 g, of which: saturates 14,0 g;
                carbohydrate 1,8 g, of which: sugars 0,5 g, starch 1,3 g; food
                fibre 0 g, protein 24,5 g, salt 0,8 g. * Possibility of
                production with no anti-caking agent.
              </p>
              <p className="text-grey mb-14">
                * Possibility of production with no anti-caking agent.
              </p>
            </div>
            <div className="text-grey">
              <h2 className="p_header">Shelf life and storage conditions</h2>
              <p>
                Best before date: 12 months from packing date, storage
                conditions before opening ≤ (minus) 18 C;
              </p>
              <p>
                Shelf life after opening: at temperature (0...+4) C no longer
                than 4 days;
              </p>
              <p>
                Shelf life after defrosting: at temperature (0...+4) C no longer
                than 7 days;
              </p>
              <p className="mb-14">Do not refreeze after defrosting.</p>
            </div>
            <div className="text-grey mb-14">
              <h2 className="p_header">IQF Logistic information</h2>
              <div>
                <strong>Primary packaging:&nbsp;</strong>
                Plastic film; dimension 280x370 mm (shredded), 280x370 mm
                (diced); designation 2 kg;
              </div>
              <div>
                <strong>Method:&nbsp;</strong>
                In a protective atmosphere.
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/mozzarella_shredded/logistic_box.png"
                alt="logistic_box"
                width={106}
                height={132}
              />
            </div>
            <div className="text-grey mb-14">
              <div>
                <strong>Secondary packaging:&nbsp;</strong>
                Carton box, 6 units in carton, 12 kg net weight of packaged
                product.
              </div>
              <div>
                <p>
                  <strong> Dimensions of the box&nbsp;</strong>
                </p>
                <p>587x257x195 mm (shredded/ diced).</p>
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/mozzarella_shredded/logistic_box_secondary.png"
                alt="logistic_box_secondary"
                width={149}
                height={120}
              />
            </div>
            <div className="text-grey pb-14">
              <h2 className="text-[18px] font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                Palette details
              </h2>
              <h2 className="flex justify-center gap-24 font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                <p>shredded</p>
                <p>diced</p>
              </h2>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per palette</p>
                <p className="w-40">60</p>
                <p>60</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per layer</p>
                <p className="w-40">6</p>
                <p>6</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Layers</p>
                <p className="w-40">10</p>
                <p>10</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Palette net</p>
                <p className="w-40">720 kg</p>
                <p>720 kg</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Size (LxWxH), mm</p>
                <p className="w-40">1200x800x2350</p>
                <p>1200x800x2350</p>
              </div>
            </div>
            <div className="mb-14">
              <Image
                src="/images/mozzarella_shredded/palette_size.png"
                alt="palette_size"
                width={153}
                height={120}
              />
            </div>
            <div className="text-grey mb-14">
              <h2 className="p_header">NON IQF Logistic information</h2>
              <div>
                <strong>Primary packaging:&nbsp;</strong>
                Plastic film; dimension 280x370 mm; designation 2kg
                (shredded/diced);
              </div>
              <div>
                <strong>Method:&nbsp;</strong>
                In a protective atmosphere.
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/mozzarella_shredded/logistic_box.png"
                alt="logistic_box"
                width={106}
                height={132}
              />
            </div>
            <div className="text-grey mb-14">
              <div>
                <strong>Secondary packaging:&nbsp;</strong>
                Carton box, 6 units in carton, 12 kg net weight of packaged
                product.
              </div>
              <div>
                <p>
                  <strong> Dimensions of the box&nbsp;</strong>
                </p>
                <p>587x257x195 mm (shredded/ diced).</p>
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/mozzarella_shredded/logistic_box_secondary.png"
                alt="logistic_box_secondary"
                width={149}
                height={120}
              />
            </div>
            <div className="text-grey pb-14">
              <h2 className="text-[18px] font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                Palette details
              </h2>
              <h2 className="flex justify-center gap-24 font-bold text-blue  border-b border-gray-300 pb-4 mb-4">
                <p>shredded</p>
                <p>diced</p>
              </h2>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per palette</p>
                <p className="w-40">60</p>
                <p>60</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Units per layer</p>
                <p className="w-40">6</p>
                <p>6</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Layers</p>
                <p className="w-40">10</p>
                <p>10</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Palette net</p>
                <p className="w-40">720 kg</p>
                <p>720 kg</p>
              </div>
              <div className="flex border-b border-gray-300  pb-4 mb-4">
                <p className="text-blue w-[164px]">Size (LxWxH), mm</p>
                <p className="w-40">1200x800x2350</p>
                <p>1200x800x2350</p>
              </div>
            </div>
            <div className="mb-14">
              <Image
                src="/images/mozzarella_shredded/palette_size.png"
                alt="palette_size"
                width={153}
                height={120}
              />
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide3;
