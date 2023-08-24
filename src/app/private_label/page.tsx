import Image from "next/image";
import PrivateLabel from "../components/PrivateLabel";
import HeaderBanner from "../components/HeaderBanner";

const PrivateProducts = () => {
  return (
    <>
      <HeaderBanner title="Private label" />

      <div className="w-full md:max-h-64 flex flex-col md:flex-row justify-between bg-white p-7 pt-12 pb-14 border border-y-zinc-200">
        <div className="flex md:w-1/5 flex-col gap-4 justify-center items-center md:items-start md:pl-8 pb-10 md:pb-0 ">
          <h1 className="text-2xl text-[#616161] font-medium">Our products</h1>
          <h3 className="italic text-[#1B3C80] underline underline-offset-2">
            Assortiment
          </h3>
        </div>
        <div className="flex gap-6 md:w-4/5 flex-col md:flex-row justify-around items-center content-center px-8">
         

          {/* ====================== Product No.1 ====================== */}
          <div className="flex flex-col hover:cursor-pointer items-center">
            <div className="flex h-32 w-20 md:h-20 md:w-12 lg:h-32 lg:w-20 pb-4">
              <Image
                src="/images/private_products/cheese_sticks.png"
                alt="Cheese_sticks"
                width={500}
                height={500}
              />
            </div>
            <div className="text-sm text-center text-slate-600">
              Cheese Sticks
            </div>
          </div>

           {/* ====================== Product No.2 ====================== */}
           <div className="flex flex-col  hover:cursor-pointer h-full justify-between items-center">
            <div className="flex h-20 w-32 md:h-20 md:w-28 lg:w-36 lg:mt-6">
              <Image
                src="/images/private_products/mozzarella.png"
                alt="Mozzarella"
                width={500}
                height={500}
              />
            </div>
            <div className="text-sm text-center text-slate-600">Mozzarella</div>
          </div>

          {/* ====================== Product No.3 ====================== */}
          <div className="flex flex-col  hover:cursor-pointer h-full justify-between items-center">
          <div className="flex h-20 w-32 md:h-12 md:w-24 lg:h-16 lg:w-32 md:mt-4 lg:mt-6">
              <Image
                src="/images/private_products/ice_cream.png"
                alt="ice_cream"
                width={500}
                height={500}
              />
            </div>
            <div className="text-sm text-center text-slate-600">Ice cream</div>
          </div>

          {/* ====================== Product No.4 ====================== */}
          <div className="flex flex-col hover:cursor-pointer items-center">
            <div className="flex h-32 w-28 md:h-20 md:w-20 lg:h-32 lg:w-36 pb-4 item-center content-center">
              <Image
                src="/images/private_products/milk_drinks.png"
                alt="Flavored_milk_drinks"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-sm text-center text-slate-600">
              Flavored milk drinks
            </div>
          </div>

          {/* ====================== Product No.5 ====================== */}
          <div className="flex flex-col hover:cursor-pointer items-center">
            <div className="flex h-32 w-28 md:h-20 md:w-20 lg:h-32 lg:w-36 pb-4">
              <Image
                src="/images/private_products/coffee_drinks.png"
                alt="iced_coffee_drinks"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-sm text-center text-slate-600">Iced coffee drinks</div>
          </div>
        </div>
      </div>
      <PrivateLabel />
    </>
  );
};

export default PrivateProducts;
