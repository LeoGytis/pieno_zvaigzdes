interface HeaderBannerProps {
  title: string;
}

const HeaderBanner = ({ title }: HeaderBannerProps) => {
  return (
    <div className="flex items-center h-60 lg:h-[400px] bg-[#F0F0F0]">
      <div className="text-3xl sm:text-5xl lg:text-[71px] font-bold text-blue  ml-8 sm:ml-20 lg:ml-44 max-w-[400px] sm:max-w-[600px]">
        {title}
      </div>
    </div>
  );
};

export default HeaderBanner;
