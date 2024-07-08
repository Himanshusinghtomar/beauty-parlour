import React from "react";

// import required modulese

import AppLayout from "./AppLayout";
import women1 from "./assites/women1.jpg";
import women2 from "./assites/women2.jpg";

const Service = () => {
  return (
    <div>
      <AppLayout>
        <div className="mt-10 mb-10 p-2 md:p-0">
          <h2
            className=" font-semibold text-[30px] text-center text-white mt-10"
            id="services"
          >
            OUR SERVICES
          </h2>
          <div className="flex justify-between mb-10 mt-10 flex-wrap">
            <div>
              <img
                src={women1}
                alt="women"
                className=" rounded-3xl  w-[448px]"
              />
            </div>
            <div className="self-center text-center mt-3 sm:mt-0 mx-auto sm:mx-0">
              <div>

              <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white mb-10">
                Face Masks ............................................ from
                ₹199
              </h4>
              <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white mb-10">
                Full Body Massage ........................... from ₹1999
              </h4>
              <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white">
                Hydragel Spa ........................................ from ₹899
              </h4>
              </div>
              <button className="border border-[#FBBB17] text-white py-2 px-4 rounded hover:bg-[#282620] hover:text-[#FBBB17] transition duration-300 mt-5">
              BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap-reverse">
            <div className="self-center text-center mt-3 sm:mt-0 mx-auto sm:mx-0">
              <div>
                <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white mb-10">
                  Hair Masks ........................... from ₹199
                </h4>
                <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white mb-10">
                  Hair Massage ................... from ₹1999
                </h4>
                <h4 className="text-[12px] lg:text-[22px] md:text-[15px] text-white">
                  Hair Spa ............................... from ₹899
                </h4>
              </div>
              <button className="border border-[#FBBB17] text-white py-2 px-4 rounded hover:bg-[#282620] hover:text-[#FBBB17] transition duration-300 mt-5">
              BOOK AN APPOINTMENT
              </button>
            </div>
            <div>
              <img
                src={women2}
                alt="women"
                className=" rounded-3xl  w-[448px]"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Service;
