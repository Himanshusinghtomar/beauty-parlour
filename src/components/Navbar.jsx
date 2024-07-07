import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";
import logo from "./assites/Beautique_logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#282019] text-white  bg-opacity-50 transition-transform duration-200 transform">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-black ">
            <a href="#products" onClick={handleClick}>
              Home
            </a>
          </li>

          <li className="my-4 py-4 border-black">
            {/* <Link to="/services">Services</Link> */}
            <a href="#services" onClick={handleClick}>
              {" "}
              Service
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/contact">Blog</Link> */}
            <a href="#blogs" onClick={handleClick}>
              Blog
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/gallery">Gallery</Link>  */}
            <a href="#gallery" onClick={handleClick}>
              {" "}
              Gallery
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            {/* <Link to="/gallery">Gallery</Link>  */}
            <a href="#contact" onClick={handleClick}>
              {" "}
              About Us
            </a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#282019]  text-white  bg-opacity-25  sticky top-0 z-50 h-[80px]">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="#">
              <img
            src={logo}
            className=" h-10"
            alt="Description "
          />
              </a>
            </div>
            <div className="md:flex md:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#products">Home</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/services">Services</Link> */}
                    <a href="#services">Shop</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/contact">Blog</Link> */}
                    <a href="#blogs">Blog</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/gallery">Gallery</Link> */}
                    <a href="#gallery"> About Us</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    {/* <Link to="/gallery">Gallery</Link> */}
                    <a href="#contact"> About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
