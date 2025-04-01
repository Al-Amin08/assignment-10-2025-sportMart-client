import React from "react";
import Marquee from "react-fast-marquee";

import styled from "styled-components";

// Imports Images
import adidas from "../../assets/adidas-logo-svgrepo-com.svg";
import amazon from "../../assets/amazon-2-logo-svgrepo-com.svg";
import british_council from "../../assets/british-council-1-logo-svgrepo-com.svg";
import mastercard from "../../assets/mastercard-2-logo-svgrepo-com.svg";
import mercedes from "../../assets/mercedes-benz-9-logo-svgrepo-com.svg";
import mongodb from "../../assets/mongodb-logo-svgrepo-com.svg";
import nike from "../../assets/nike-3-logo-svgrepo-com.svg";
import paypal from "../../assets/paypal-logo-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-logo-svgrepo-com.svg";
import samsung from "../../assets/samsung-logo-svgrepo-com.svg";

const Sponsor = () => {
  return (
    <div className="my-28">
      <h1 className="text-center font-bold text-4xl mb-5">Our Sponsor</h1>
      <Marquee
        // autoFill={true}
        play={true}
        // pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        speed={30}
        //delay={2}
        loop={0} //infinite
        gradient={true}
        gradientColor="white"
        gradientWidth={300}
        className="flex gap-7"
      >
        {/* <MainWrapper>
          <LogoStrip>
            <SquareLogoWrapper>
              <LogoImg src={Adani} />
            </SquareLogoWrapper>
            <RoundLogoWrapper>
              <LogoImg src={AgroservisTomsk} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={AirCanada} />
            </SquareLogoWrapper>
            <RoundLogoWrapper>
              <LogoImg src={Alipay} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={DataCooler} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "7px" }}>
              <LogoImg src={Gulf} />
            </RoundLogoWrapper>
            <SquareLogoWrapper style={{ height: "3.2rem", top: "1px" }}>
              <LogoImg src={GulfAir} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "2px" }}>
              <LogoImg src={Honda} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={LarsenDigital} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "2px" }}>
              <LogoImg src={Maytag} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={Monarch} />
            </SquareLogoWrapper>
          </LogoStrip>
        </MainWrapper> */}
        <img className="max-w-40  mx-8" src={adidas} alt="" />
        <img className="max-w-40  mx-8" src={mastercard} alt="" />
        <img className="max-w-40  mx-8" src={mercedes} alt="" />
        <img className="max-w-40  mx-8" src={paypal} alt="" />
        <img className="max-w-40  mx-8" src={amazon} alt="" />
        <img className="max-w-40  mx-8" src={mongodb} alt="" />
        <img className="max-w-40  mx-8" src={samsung} alt="" />
        <img className="max-w-40  mx-8" src={linkedin} alt="" />
        <img className="max-w-40  mx-8" src={nike} alt="" />
        <img className="max-w-40  mx-8" src={british_council} alt="" />
      </Marquee>

      {/* <Marquee
        autoFill={true}
        play={true}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        speed={15}
        //delay={2}
        loop={0} //infinite
        gradient={true}
        gradientColor="white"
        gradientWidth={300}
      >
        <MainWrapper>
          <LogoStrip>
            <SquareLogoWrapper>
              <LogoImg src={TomskEnergo} />
            </SquareLogoWrapper>
            <RoundLogoWrapper>
              <LogoImg src={AgroservisTomsk} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={AirCanada} />
            </SquareLogoWrapper>
            <RoundLogoWrapper>
              <LogoImg src={Alipay} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={DataCooler} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "7px" }}>
              <LogoImg src={Gulf} />
            </RoundLogoWrapper>
            <SquareLogoWrapper style={{ height: "3.2rem", top: "1px" }}>
              <LogoImg src={GulfAir} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "2px" }}>
              <LogoImg src={Honda} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={LarsenDigital} />
            </SquareLogoWrapper>
            <RoundLogoWrapper style={{ height: "3.2rem", top: "2px" }}>
              <LogoImg src={Maytag} />
            </RoundLogoWrapper>
            <SquareLogoWrapper>
              <LogoImg src={Monarch} />
            </SquareLogoWrapper>
          </LogoStrip>
        </MainWrapper>
      </Marquee> */}
    </div>
  );
};

export default Sponsor;
