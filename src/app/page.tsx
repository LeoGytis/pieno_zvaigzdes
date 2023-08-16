"use client";
import Description from "./components/Description";
import PrivateLabel from "./components/PrivateLabel";
import PrivateProducts from "./components/PrivateProducts";
import Products from "./components/Products";

const Home = () => {
  return (
    <>
      {/* <Products /> */}
      {/* <Description /> */}

      <PrivateProducts />
      <PrivateLabel />
    </>
  );
};

export default Home;
