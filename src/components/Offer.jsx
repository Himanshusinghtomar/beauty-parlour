import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lady from "./assites/lady.png";
import gl2 from "./assites/gl2.png";
import gl3 from "./assites/gl3.png";
import OfferAll from "./OfferAll";
import AppLayout from "./AppLayout";
const Offer = () => {
  let [isPopOpen, setIsPopupOpen] = useState(false);
  let [imsg, setImage] = useState(0);

  let openPopup = (ImageNo) => {
    setIsPopupOpen(true);
    setImage(ImageNo);
  };

  return (
    <AppLayout>
      <div className="my-10">
        <h1 className="text-center font-semibold text-[35px] mb-6 text-white">
          COMMENTS
        </h1>
        <div className="flex justify-between flex-wrap gap-3 p-2 sm:p-0">
          <div className="max-w-md mx-auto bg-[#35322C] rounded-xl shadow-md overflow-hidden md:max-w-lg">
            <div className="p-8">
              <blockquote className="text-gray-300 text-lg italic">
                “It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English”
              </blockquote>
            </div>
            <div className="flex items-center bg-yellow-700 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src={lady}
                alt="Siya Mansuri"
              />
              <div className="ml-4">
                <div className="text-white font-bold">SIYA MANSURI</div>
                <div className="text-gray-400 text-sm">21st January 2024</div>
              </div>
              <div className="ml-auto text-yellow-500">
                <div className="flex">
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-[#35322C] rounded-xl shadow-md overflow-hidden md:max-w-lg">
            <div className="p-8">
              <blockquote className="text-gray-300 text-lg italic">
                “It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English”
              </blockquote>
            </div>
            <div className="flex items-center bg-yellow-700 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src={lady}
                alt="Siya Mansuri"
              />
              <div className="ml-4">
                <div className="text-white font-bold">SIYA MANSURI</div>
                <div className="text-gray-400 text-sm">21st January 2024</div>
              </div>
              <div className="ml-auto text-yellow-500">
                <div className="flex">
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.015 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Offer;
