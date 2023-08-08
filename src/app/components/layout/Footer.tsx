const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center pt-6 md:pt-16 pb-6 border border-orange-600">
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-24">
          <div className="p-10">
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Lietuva&nbsp;</p>
              <p className="mb-2">pienozvaigzdes.lt</p>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Global&nbsp;</p>
              <p className="mb-2">pienozvaigzdes.com</p>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Estija&nbsp;</p>
              <p className="mb-2">aasapiim.eu</p>
            </div>
            <div className="flex justify-center items-center text-center mb-2">
              <p className="text-grey mb-2">Latvija&nbsp;</p>
              <p className="mb-2">annele.lv</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center px-10">
            <h2 className="flex justify-center text-[18px] font-bold text-blue mb-4">
              SUSIEKITE
            </h2>
            <div>
              <p className="mb-2">info@pienozvaigzdes.lt</p>
              <p className="mb-2">8 5 2461414</p>
              <p className="mb-2">Nemokama kokybės linija</p>
              <p className="mb-2">8 800 55224</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-300 mt-2">
          <p className="text-center text-xs sm:text-base text-grey pt-2 sm:pt-4">
            AB Pieno žvaigždės © 2023, Visos teisės saugomos, privatumo
            politika, pranešėjų apsauga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
