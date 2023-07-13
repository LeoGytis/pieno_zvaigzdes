import ClientProducts from "../ClientProducts";
import HeaderBanner from "../HeaderBanner";
import NavBar from "../NavBar";
import Prod from "../Prod";

const Header: any = () => {
  return (
    <header>
      <NavBar />
      <HeaderBanner />
      {/* <ClientProducts /> */}
      <Prod />
    </header>
  );
};

export default Header;
