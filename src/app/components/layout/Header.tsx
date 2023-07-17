import HeaderBanner from "../HeaderBanner";
import NavBar from "../NavBar";
import ProductSlide from "../ProductSlide";

const Header: any = () => {
  return (
    <header>
      <NavBar />
      <HeaderBanner />
      <ProductSlide />
    </header>
  );
};

export default Header;
