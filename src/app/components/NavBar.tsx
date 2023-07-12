const NavBar: any = () => {
  return (
    <div className="bg-[#1C3C87]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 px-8">
        <div className="flex items-center w-200 sm:w-[320px] pb-4 md:pb-0">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex items-center text-xs sm:text-base text-white ">
          <div>EN | Produktų paieška | &#9740; | Meniu | &#9776;</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
