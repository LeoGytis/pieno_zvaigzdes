import Image from "next/image";

const NavBar: any = () => {
  return (
    <div className="bg-[#1C3C87]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 px-8">
        <div className="flex items-center w-200 sm:w-[320px] pb-4 md:pb-0">
          <Image src="/logo.png" alt="logo" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
