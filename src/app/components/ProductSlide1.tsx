import Image from "next/image";
import ContactUs from "./ContactUs";

export interface ProductSlideProps {
  onClose: () => void;
}

const ProductSlide1 = ({ onClose }: ProductSlideProps) => {
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
          <div className="flex justify-center max-h-96 md:max-h-none md:w-1/2 p-10 lg:p-24">
            <Image
              src="/images/milk_powder/milk_powder.png"
              alt="Milk_Powder"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="md:w-1/2 text-sm pl-16 pr-28 py-5 lg:py-16">
            <h1 className="text-6xl text-blue font-bold mb-10">
              Svalya Skimmed Milk Powder
            </h1>
            <div>
              <h2 className="p_header">Labeling</h2>
              <p className="text-grey">Skimmed milk powder ADPI Extra Grade.</p>
              <p className="text-grey">Ingredients: skimmed milk</p>
              <p className="text-grey mb-14">
                Nutrition 100g: energy value 1482kJ/348 kcal; protein 35,1 g;
                fat 0,8 g;- saturated fat 0,5 g; carbohydrate 52,0 g; sugars
                52,0 g; salt 1,5 g.
              </p>
            </div>

            <div>
              <h2 className="p_header">Shelf life and storage conditions</h2>
              <p className="text-grey mb-14">
                Temperature ≤ 25 ⁰C, the relative humidity ≤ 85%, Shelf life no
                longer than 24 months from the date of manufacturing.
              </p>
            </div>

            <div>
              <h2 className="p_header">Logistic information</h2>
              <div className="flex">
                <p className="font-bold text-grey mb-2">
                  Primary packaging:&nbsp;
                </p>
                <p className="text-grey mb-2">
                  25 kg – manylayers paper bag with PE liner
                </p>
              </div>
              <div className="flex">
                <p className="font-bold text-grey mb-2">Label:&nbsp;</p>
                <p className="text-grey mb-2">
                  Paper ThermalTOP, 100x60 mm&quot;
                </p>
              </div>

              <div className="flex">
                <p className="font-bold text-grey mb-2">Method:&nbsp;</p>
                <p className="text-grey mb-14">Hot lock.</p>
              </div>
            </div>
            <div className="flex gap-10 mb-14">
              <Image
                src="/images/milk_powder/logistic_box.png"
                alt="logistic_box"
                width={106}
                height={132}
              />
            </div>

            {/*  ===================== Palette details ===================== */}

            <div className="pb-14">
              <h2 className="p_header table_row !w-2/3 !text-start !text-blue">
                Palette details
              </h2>
              <div className="flex">
                <div className="!text-blue w-1/3">
                  <div className="table_row !text-start !text-blue">
                    Units per palette
                  </div>
                  <div className="table_row !text-start !text-blue">
                    Units per layer
                  </div>
                  <div className="table_row !text-start !text-blue">Layers</div>
                  <div className="table_row !text-start !text-blue">
                    Palette net
                  </div>
                  <div className="table_row !text-start !text-blue">
                    Size (LxWxH), mm
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end w-1/3">
                  <div className="table_row">30</div>
                  <div className="table_row">3</div>
                  <div className="table_row">10</div>
                  <div className="table_row">720 kg</div>
                  <div className="table_row">1200x800x1200</div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}

            <div className="mb-14">
              <Image
                src="/images/milk_powder/palette_size.png"
                alt="palette_size"
                width={156}
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

export default ProductSlide1;
