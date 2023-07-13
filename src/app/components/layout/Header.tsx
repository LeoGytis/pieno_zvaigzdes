import ClientProducts from "../ClientProducts";
import HeaderBanner from "../HeaderBanner";
import NavBar from "../NavBar";

const Header: any = () => {
  return (
    <header>
      <NavBar />
      <HeaderBanner />
      <ClientProducts />
    </header>
  );
};

export default Header;
