import AppLayout from "./AppLayout";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import ProductMock from "./MockData/ProductMock";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="my-5 bg-[#031A25]" id="products">
      <AppLayout>
        <div className="">
          <h2 className="text-center text-[30px] font-bold text-white ">
            Products
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {ProductMock.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className=" w-[150px] sm:w-[250px] h-[180px] sm:h-[250px] flex flex-col justify-center items-center mt-8 mb-10 mx-auto bg-[#1C2428] rounded-md">
                  <Link to={`/product/${slide.Id}`}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className=" h-[80px] sm:h-[100px] text-center"
                    />
                  </Link>
                  <h1 className="text-white font-semibold pt-4 text-[20px]">
                    <Link to={`/product/${slide.Id}`}>{slide.title}</Link>
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AppLayout>
    </div>
  );
}

export default Product;
