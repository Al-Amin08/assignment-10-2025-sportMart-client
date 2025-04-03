import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bat from "../../assets/cricket_bg.webp";
import football from "../../assets/football_bg.jpg";
import jersy from "../../assets/jersy_bg.jpg";
import racket from "../../assets/racket_bg.webp";
import shoe from "../../assets/shoe_bg.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className=" mt-17">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="bg-center object-cover w-72 h-72">
          <img className="w-full h-200 object-cover" src={bat} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-200 object-cover" src={football} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-200 object-cover" src={jersy} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-200 object-cover" src={shoe} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-200 object-cover" src={racket} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
