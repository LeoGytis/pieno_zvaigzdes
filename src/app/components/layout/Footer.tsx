const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center pt-6 md:pt-16 pb-6 bg-[#F0F0F0]">
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-24">
          <div className="p-10">
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Lietuva&nbsp;</p>
              <a
                className="mb-2 text-black"
                href="https://pienozvaigzdes.lt/lt/"
              >
                pienozvaigzdes.lt
              </a>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Global&nbsp;</p>
              <a
                className="mb-2 text-black"
                href="https://pienozvaigzdes.lt/com/"
              >
                pienozvaigzdes.com
              </a>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Estija&nbsp;</p>
              <a
                className="mb-2 text-black"
                href="https://pienozvaigzdes.lt/ee/"
              >
                aasapiim.eu
              </a>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Latvija&nbsp;</p>
              <a
                className="mb-2 text-black"
                href="https://pienozvaigzdes.lt/lv/"
              >
                annele.lv
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-10">
            <h2 className="flex justify-center text-[18px] font-bold text-blue mb-4">
              SUSIEKITE
            </h2>
            <div className="text-black">
              <a className="mb-2" href="mailto: info@pienozvaigzdes.lt">
                info@pienozvaigzdes.lt
              </a>
              <p className="mb-2">8 5 2461414</p>
              <p className="mb-2">Nemokama kokybės linija</p>
              <p className="mb-2">8 800 55224</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-300 mt-2">
          <p className="text-center text-xs sm:text-base text-grey px-2 pt-2 sm:pt-4">
            AB Pieno žvaigždės © 2023, Visos teisės saugomos, privatumo
            politika, pranešėjų apsauga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
