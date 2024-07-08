import React from "react";
import AppLayout from "./AppLayout";
import heroImg from "./assites/heroImage.png";

import what from "./assites/Whatsapp.png";
import fac from "./assites/facebook.png";
import you from "./assites/Youtube.png";
import inst from "./assites/Instagram.png";
import amo from "./assites/Amazon.png";
import big from "./assites/bigbasket.png";
import im from "./assites/Ebay.png";
import link from "./assites/linkedin.png";
import flip from "./assites/flipkart.png";
import Xi from "./assites/Twitter.png";
import sw from "./assites/Swiggy (1).png";
import zo from "./assites/zomato.png";
import me from "./assites/indiamart.png";
import ju from "./assites/Justdial.png";
const Hero = () => {
  return (
    <AppLayout>
      <div className="flex gap-5 justify-between flex-wrap-reverse p-2 md:p-0">
        <div className="w-[700px]  mt-[100px]">
          <h2 className=" font-semibold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white mb-4 ">
            “ It is a long established fact that a reader will be tracked
            distracted by the readable content of a page is when looking at its
            layout. The point of using Lorem of distribution it look like
            readable English “
          </h2>
          <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">
            Let's Talk
          </button>
        </div>
        <div className="md:mx-0 mx-auto">
          <div className="relative">
            <div className="absolute top-[-80px]">
              <div className="outline outline-4 p-2 text-white">
                <img src={heroImg} alt="beautique" className="" />
              </div>
            </div>
          </div>
          <div className="mt-[180px]">
            <h1 className=" my-4 text-center text-[20px] font-normal text-white">
              Shanaya Patel
            </h1>
            <h2 className="text-[24px] text-center font-bold text-white pb-2">
              Beautique Parlour
            </h2>
          </div>
          <div>
            <div className="flex gap-2 pb-1 mx-[5%] sm:mx-2 sm:gap-4">
              <img
                src={what}
                alt="facebook logo"
                className="h-[40px] w-[38px]  "
              />
              <img
                src={you}
                alt="facebook logo"
                className="h-[40px] w-[38px] "
              />

              <img
                src={inst}
                alt="facebook logo"
                className="h-[40px] w-[38px] "
              />

              <img
                src={Xi}
                alt="facebook logo"
                className="h-[40px] w-[38px]  "
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Hero;
