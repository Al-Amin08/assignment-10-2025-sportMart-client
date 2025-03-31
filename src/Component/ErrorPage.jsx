import Lottie from "lottie-react";
import React from "react";
import error from "../assets/Error.json";

const ErrorPage = () => {
  return (
    // <div className="  overflow-hidden ">
    //   <Lottie className="" animationData={bird} loop={true} />
    // </div>
    <div className="w-screen h-screen overflow-hidden">
      <Lottie className="w-full h-full" animationData={error} loop />
    </div>
  );
};

export default ErrorPage;
