import Image from "next/image";
import ProductSlideContainer, {
  ProductSlideProps,
} from "./ProductSlideContainer";
import productImage from "../../../public/images/mozzarella_strechy/mozzarella.png";

const ProductSlide4 = ({ onClose }: ProductSlideProps) => {
  return (
    <ProductSlideContainer onClose={onClose} productImage={productImage}>
      <h1 className="product_title">
        Svalya Mozzarella 40% <p className="text-base">(or 45%)</p>
      </h1>
      <div className="flex max-h-20 gap-6 mb-10">
        <Image
          src="/images/tokens/token_03.png"
          alt="token"
          width={57}
          height={67}
        />
      </div>
      <div className="text-grey mb-14">
        <h2 className="text-xl font-bold mb-10">
          For grating, shredding, dicing, slicing
        </h2>
        <Image
          src="/images/mozzarella_strechy/diced_in_cubes.png"
          alt="Diced in cubes"
          width={217}
          height={119}
        />
      </div>
      <div className="text-grey mb-14">
        <h2 className="p_header">Labeling</h2>
        <p>Cheese “Mozzarella” 40% fat in dry matter.</p>
        <p>
          Ingredients: pasteurized milk, salt, starter cultures, microbial
          rennet.
        </p>
        <p className="text-grey mb-6">
          Nutrition 100 g: energy 1221 kJ / 294 kcal; fat 21,5 g, of which:
          saturates 14,0 g; carbohydrate 0,5 g, of which: sugars 0,5 g; protein
          24,5 g, salt 0,8.
        </p>
      </div>
      <div className="text-grey mb-14">
        <h2 className="p_header">Shelf life and storage conditions</h2>
        <p>
          Temperature (0... + 4) °C No longer than 90 days from production date.
        </p>
        <p>
          Temperature lower than (-18) °C No longer than 18 months from
          production date.
        </p>
      </div>
      <div className="text-grey leading-7 mb-14">
        <h2 className="p_header">Logistic information</h2>
        <div>
          <strong>Primary packaging:</strong>
          <p className="pl-1">1. Thermo shrinkable bag OSB 5050 BAG 230x550</p>
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
          src="/images/mozzarella_strechy/logistic_box.png"
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
          src="/images/mozzarella_strechy/palette_size.png"
          alt="palette size"
          width={149}
          height={120}
        />
      </div>

      {/*  ===================== Palette details ===================== */}

      <div className="pb-14">
        <h2 className="p_header">Palette details</h2>
        <div className="flex flex-col sm:flex-row">
          <div className="flex w-full sm:w-2/3">
            <div className="!text-blue w-1/2 sm:w-1/4">
              <div className="table_row p_header">&nbsp;</div>
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
                Size (LxW), mm
              </div>
              <div className="table_row !text-start !text-blue">
                <br></br>Type
              </div>
            </div>

            <div className="flex flex-col justify-end items-end w-1/2 sm:w-full">
              <div className="table_row p_header !text-blue">
                60 units per palette
              </div>
              <div className="table_row">60</div>
              <div className="table_row">5</div>
              <div className="table_row">12</div>
              <div className="table_row">720 kg*</div>
              <div className="table_row">1200x800</div>
              <div className="table_row">
                {" "}
                Wood, EUR, <br></br>one-way pallet
              </div>
            </div>
          </div>
          {/* =================== Split it two tables =================== */}
          <div className="flex w-full sm:w-1/3">
            <div className="sm:hidden !text-blue w-1/2 pt-10">
              <div className="table_row p_header">&nbsp;</div>
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
                Size (LxW), mm
              </div>
              <div className="table_row !text-start !text-blue">
                <br></br>Type
              </div>
            </div>
            <div className="flex flex-col justify-end items-end w-1/2 sm:w-full">
              <div className="table_row p_header !text-blue">
                83 units per palette
              </div>
              <div className="table_row">83</div>
              <div className="table_row">5</div>
              <div className="table_row">17</div>
              <div className="table_row">1000 kg*</div>
              <div className="table_row">1200x800</div>
              <div className="table_row">
                Wood, EUR,<br></br> one-way pallet
              </div>
            </div>
          </div>
        </div>
        <p className="text-grey">*Variable weight</p>
      </div>
    </ProductSlideContainer>
  );
};

export default ProductSlide4;
