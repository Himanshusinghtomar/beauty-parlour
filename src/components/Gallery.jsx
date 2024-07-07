import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopupAlbum from "./PopupAlbum";

import AppLayout from "./AppLayout";
const Galleary = () => {
  let [isPopOpen, setIsPopupOpen] = useState(false);
  let [imsg, setImage] = useState(0);

  let openPopup = (ImageNo) => {
    setIsPopupOpen(true);
    setImage(ImageNo);
  };

  return (
    <div>
      
      <div className="mb-10 mt-10" id="gallery">
      <AppLayout>
      <p className="text-center font-semibold text-[30px] items-start   text-[#FFF]">
            Gallery
          </p>
          </AppLayout>
        <div className="w-[80%] mx-auto pb-10 ">
          
          <div className=" pt-[15px]  md:hidden ">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              
            >
              <div className="flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] mx-auto rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]"
                  onClick={() => openPopup(0)}
                  alt="make up"
                />
              </div>
              <div className="flex items-center justify-center ">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="transition-transform transform duration-100 hover:scale-110 w-[281px] mx-auto h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]"
                  alt="sand makeup"
                  onClick={() => openPopup(1)}
                />
              </div>
            </Slider>
          </div>

          <div className=" flex-wrap justify-center mt-[60px] hidden px-[10px] gap-y-[12px] md:flex">
            <img
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="ma"
              onClick={() => openPopup(0)}
            />
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="ma"
              onClick={() => openPopup(1)}
            />

            <img
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[281px] h-[168px] transition-transform transform duration-100 hover:scale-110 rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="ma"
              onClick={() => openPopup(0)}
            />
           
          </div>
        </div>
        {isPopOpen && (
          <PopupAlbum
            setIsPopupOpen={setIsPopupOpen}
            imsg={imsg}
            setImage={setImage}
          />
        )}
      </div>
    </div>
  );
};

export default Galleary;
