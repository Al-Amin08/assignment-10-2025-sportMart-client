import React from "react";
import Slider from "./Slider";
import Products from "./Products";
import Sponsor from "./Sponsor";
import { Toaster } from "react-hot-toast";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <Slider></Slider>
      <Products></Products>
      <Sponsor></Sponsor>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
