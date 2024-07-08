import React from "react";
import AppLayout from "./AppLayout";
import home from "./assites/Home.png"
import mal from "./assites/Mail.png"
import cal from "./assites/Telephone.png"
import ctg from "./assites/Menu.png"
const ContactUs = () => {
  return (
    <AppLayout>
      <div className="  mt-20 mb-20">
        <h1 className="text-center font-semibold  text-[25px] text-[#FFF] mt-4 mb-4">
        GET IN TOUCH WITH US
        </h1>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-[30px] px-4">
          <div className="border-1 sm:border-4 border-[#FBBB17] rounded-[10px] bg-[#45342C]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4">
                <img
                  src={home}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-2 mt-1"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold text-white">VISIT US :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px] text-white">vasant vihar, nikol, Ahmedabad 382330</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-1 sm:border-4 border-[#FBBB17] rounded-[10px] bg-[#45342C]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={mal}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-4 mt-1 pb-2"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold text-white">MAIL US :</h1>
                  <p className="text-[12px] lg:text-[22px] md:text-[15px] text-white">shanayabeautique@gmail.com</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-1 sm:border-4 border-[#FBBB17] rounded-[10px] bg-[#45342C]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={cal}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-4 mt-1 pb-2"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold text-white">CALL US :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px] text-white">Call: 1-800-123-9999</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-1 sm:border-4 border-[#FBBB17] rounded-[10px] bg-[#45342C]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={ctg}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-2 mt-1"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold text-white">CATEGORY  :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px] text-white">Beauty Parlour</p>
                </div>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
};

export default ContactUs;
