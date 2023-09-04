import Image from "next/image";

interface HeaderBannerProps {
  title: string;
  imageUrl: string;
}

const HeaderBanner = ({ title, imageUrl }: HeaderBannerProps) => {
  return (
    <>
      <div
        className="flex items-center h-60 sm:h-[400px] md:h-[733px] bg-[#F0F0F0]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-32 w-20 md:h-20 md:w-12 lg:h-32 lg:w-20 pb-4"></div>
        <div className="text-3xl sm:text-5xl lg:text-[71px] font-bold text-white ml-8 sm:ml-20 lg:ml-44 max-w-[400px] sm:max-w-[600px]">
          {title}
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
