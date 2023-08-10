import Image from "next/image";
import ProductSlideContainer, {
  ProductSlideProps,
} from "./ProductSlideContainer";
import productImage from "../../../public/images/mozzarella_shredded/mozzarella.png";

const ProductSlide3 = ({ onClose }: ProductSlideProps) => {
  return (
    <ProductSlideContainer onClose={onClose} productImage={productImage}>
      <h1 className="product_title">Svalya Mozzarella 40%</h1>
      <div className="flex w-12 md:w-full max-h-12 md:max-h-20 gap-6 mb-10">
        <Image
          src="/images/tokens/token_01.png"
          alt="token"
          width={79}
          height={77}
        />
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
          alt="diced_in_cubes"
          width={217}
          height={119}
        />
        <p className="mt-6">Diced in cubes</p>
        <p className="mb-10">fraction cuts: 3x3x3 mm, 6x6x6 mm, 10x10x10 mm</p>
        <Image
          src="/images/mozzarella_shredded/shredded.png"
          alt="shredded"
          width={217}
          height={119}
        />
        <p className="mt-6">Shredded</p>
        <p className="mb-10"> fraction cuts: 3x1, 5x30 mm</p>
        <Image
          src="/images/mozzarella_shredded/diced_in_stripes.png"
          alt="diced_in_stripes"
          width={217}
          height={119}
        />
        <p className="mt-6">Diced in stripes</p>
        <p className="mb-10">fraction cuts: 3x3x10 mm, 3x3x30 mm</p>
      </div>
      <div>
        <h2 className="p_header">Labeling</h2>
        <p className="text-grey">
          Diced/ Shredded frozen Cheese „Mozzarella“ 40% fat in dry matter.
        </p>
        <p className="text-grey">
          Ingredients: cheese Mozzarella (pasteurized milk, salt, starter
          cultures, microbial rennet), anti-caking agent: starch potato*.
        </p>
        <p className="text-grey mb-6">
          Packaged in a protective atmosphere.Nutrition 100 g: energy 1243
          kJ/299 kcal; fat 21,5 g, of which: saturates 14,0 g; carbohydrate 1,8
          g, of which: sugars 0,5 g, starch 1,3 g; food fibre 0 g, protein 24,5
          g, salt 0,8 g. * Possibility of production with no anti-caking agent.
        </p>
        <p className="text-grey mb-14">
          * Possibility of production with no anti-caking agent.
        </p>
      </div>
      <div className="text-grey">
        <h2 className="p_header">Shelf life and storage conditions</h2>
        <p>
          Best before date: 12 months from packing date, storage conditions
          before opening ≤ (minus) 18 C;
        </p>
        <p>
          Shelf life after opening: at temperature (0...+4) C no longer than 4
          days;
        </p>
        <p>
          Shelf life after defrosting: at temperature (0...+4) C no longer than
          7 days;
        </p>
        <p className="mb-14">Do not refreeze after defrosting.</p>
      </div>
      <div className="text-grey mb-14">
        <h2 className="p_header">IQF Logistic information</h2>
        <div>
          <strong>Primary packaging:&nbsp;</strong>
          Plastic film; dimension 280x370 mm (shredded), 280x370 mm (diced);
          designation 2 kg;
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
          Carton box, 6 units in carton, 12 kg net weight of packaged product.
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
      {/*  ===================== Palette details ===================== */}

      <div className="pb-14">
        <h2 className="p_header table_row !text-start !text-blue">
          Palette details
        </h2>
        <div className="flex">
          <div className="!text-blue w-1/3">
            <div className="table_row !text-start">&nbsp;</div>
            <div className="table_row !text-start !text-blue">
              Units per palette
            </div>
            <div className="table_row !text-start !text-blue">
              Units per layer
            </div>
            <div className="table_row !text-start !text-blue">Layers</div>
            <div className="table_row !text-start !text-blue">Palette net</div>
            <div className="table_row !text-start !text-blue">
              Size (LxWxH), mm
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-1/3">
            <div className="table_row p_header !text-blue">shredded</div>
            <div className="table_row">60</div>
            <div className="table_row">6</div>
            <div className="table_row">10</div>
            <div className="table_row">720 kg</div>
            <div className="table_row">1200x800x2350</div>
          </div>
          <div className="flex flex-col justify-end items-end w-1/3">
            <div className="table_row p_header !text-blue">diced</div>
            <div className="table_row">60</div>
            <div className="table_row">6</div>
            <div className="table_row">10</div>
            <div className="table_row">720 kg</div>
            <div className="table_row">1200x800x2350</div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
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
          Plastic film; dimension 280x370 mm; designation 2kg (shredded/diced);
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
          Carton box, 6 units in carton, 12 kg net weight of packaged product.
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
      {/*  ===================== Palette details ===================== */}

      <div className="pb-14">
        <h2 className="p_header table_row !text-start !text-blue">
          Palette details
        </h2>
        <div className="flex">
          <div className="!text-blue w-1/3">
            <div className="table_row !text-start">&nbsp;</div>
            <div className="table_row !text-start !text-blue">
              Units per palette
            </div>
            <div className="table_row !text-start !text-blue">
              Units per layer
            </div>
            <div className="table_row !text-start !text-blue">Layers</div>
            <div className="table_row !text-start !text-blue">Palette net</div>
            <div className="table_row !text-start !text-blue">
              Size (LxWxH), mm
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-1/3">
            <div className="table_row p_header !text-blue">shredded</div>
            <div className="table_row">60</div>
            <div className="table_row">6</div>
            <div className="table_row">10</div>
            <div className="table_row">720 kg</div>
            <div className="table_row">1200x800x2350</div>
          </div>
          <div className="flex flex-col justify-end items-end w-1/3">
            <div className="table_row p_header !text-blue">diced</div>
            <div className="table_row">60</div>
            <div className="table_row">6</div>
            <div className="table_row">10</div>
            <div className="table_row">720 kg</div>
            <div className="table_row">1200x800x2350</div>
          </div>
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
    </ProductSlideContainer>
  );
};

export default ProductSlide3;
