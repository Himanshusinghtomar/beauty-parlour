import { GrFormPrevious } from "react-icons/gr";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import gl1 from "./assites/gl1.png";
import gl2 from "./assites/gl2.png";
import gl3 from "./assites/gl3.png";
let imagarr = [gl1, gl2, gl3]; // if you want to add some image then , gice url in this array

const OfferAll = ({ setIsPopupOpen, imsg, setImage }) => {
  let handleNextImage = () => {
    if (imsg === imagarr.length - 1) {
      setImage(0);
    } else {
      setImage(imsg + 1);
    }
  };

  let handlePrevImage = () => {
    if (imsg === 0) {
      setImage(imagarr.length - 1);
    } else {
      setImage(imsg - 1);
    }
  };
  return (
    <div className="h-screen w-full sm:mt-[10%] mt-[12%] lg:mt-[5%] md:mt-[10%] bg-[#1f1c147c] fixed top-0 flex justify-center items-center z-10">
    <div
      className="text-right mt-2  text-white text-[31px] absolute right-5 top-3 cursor-pointer"
      onClick={() => setIsPopupOpen(false)}
    >
      X
    </div>

    <div className="flex w-full items-center">
      <div
        className="text-[50px]  text-white cursor-pointer z-10 absolute left-0 bg-[#00000081]"
        onClick={handlePrevImage}
      >
        <GrFormPrevious />
      </div>
      <img
        src={imagarr[imsg]}
        className="w-full transition-transform transform duration-100 hover:scale-110 h-[380px] mx-auto md:h-[400px] md:w-[480px] lg:h-[400px] lg:w-[480px] lg:rounded-[1px]"
        alt="Image 1"
      />
      <div
        className="text-[50px] text-white cursor-pointer absolute z-10 right-0 bg-[#00000069]"
        onClick={handleNextImage}
      >
        <GrFormNext />
      </div>
    </div>
  </div>
  );
};


export default OfferAll