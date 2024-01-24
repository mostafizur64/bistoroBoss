import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h1 className="text-4xl uppercase  text-center -mt-20 shadow-md font-semibold text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide1" />
          <h1 className="text-4xl uppercase  text-center -mt-20 shadow-md font-semibold text-white">Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide1" />
          <h1 className="text-4xl uppercase  text-center -mt-20 shadow-md font-semibold text-white">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide1" />
          <h1 className="text-4xl uppercase  text-center -mt-20 shadow-md font-semibold text-white">Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide1" />
          <h1 className="text-4xl uppercase  text-center -mt-20 shadow-md font-semibold text-white">Salads</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
