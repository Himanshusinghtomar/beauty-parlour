import React from "react";
import QR from "./assites/Barcode.png";
import what from "./assites/Whatsapp.png";
import fac from "./assites/facebook.png";
import inst from "./assites/Instagram.png";
// import you from "./assites/Youtube.png";
function Footer() {
  return (
    <div className="w-full     bg-[#5F4614] text-[#FFF] p-2 sm:p-0   lg:pb-4">
      <div class="flex justify-evenly flex-wrap">
        <div className="  my-10">
          <p className="mb-6 text-xl font-bold ">Contaact Details :-</p>
          <ul className="flex flex-col space-y-2   ">
            <h1 className=" font-bold text-xl">Address</h1>
            <li className=" hover:text-black text-lg cursor-pointer">
              shop 19, fred decor,Ahmedabad
            </li>
            <h1 className=" font-bold text-xl">phone</h1>
            <li className="hover:text-black cursor-pointer text-lg">
              +91 915 793 2201
            </li>
            <h1 className=" font-bold text-xl">Email.</h1>
            <li className=" hover:text-black text-lg cursor-pointer">
              fashionista@gmail.com
            </li>
          </ul>
        </div>
        <div className="my-10">
          <ul>

          <li className="text-2xl font-bold  ">PAY NOW</li>
          <li className="">
            <div className="">
              <a href="https://www.figma.com/file/1qPHan6lbYD57Cz9KuYQJ9/image/5a7d0214bdd3d9de2cb78b0a3e001fed5bec74ab">
                <img
                  src={QR}
                  alt="QR"
                  className="m-2 h-[120px] w-[#130px] pb-5 cursor-pointer "
                />
              </a>
            </div>
          </li>
          </ul>
        </div>
        <div className="my-10">
          <p className="mb-4 text-lg font-semibold  pt-12   ">Like & Follow</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
            <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2   ">
              <img
                src={fac}
                alt="facebook logo"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
              <img
                src={inst}
                alt="facebook logo"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
              <img
                src={what}
                alt="insta"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
            </span>
          </ul>
        </div>
      </div>
      <hr className="my-1 " />
      <div className="mx-auto mt-2 ">
        <div className=" text-center">
          <p className="text-sm font-medium text-center ">
            © 2024 COPYRIGHTS 2024 BY BEAUTIQUE ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
