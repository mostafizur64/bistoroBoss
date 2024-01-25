import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Subtitle from "../../../Components/Subtitle/Subtitle";

const Category = () => {
  return (
    <section>
    
    <Subtitle subTitle="From 11.00 to 10.00pm" heading="Order Online"/>
   
   
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-16"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img className="md:w-full w-full" src={slide1} alt="slide1" />
          <h1 className="text-4xl uppercase text-center -mt-20 shadow-md font-semibold text-white">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full w-full" src={slide2} alt="slide1" />
          <h1 className="text-4xl uppercase text-center -mt-20 shadow-md font-semibold text-white">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full w-full" src={slide3} alt="slide1" />
          <h1 className="text-4xl uppercase text-center -mt-20 shadow-md font-semibold text-white">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full w-full" src={slide4} alt="slide1" />
          <h1 className="text-4xl uppercase text-center -mt-20 shadow-md font-semibold text-white">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:w-full w-full" src={slide5} alt="slide1" />
          <h1 className="text-4xl uppercase text-center -mt-20 shadow-md font-semibold text-white">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
