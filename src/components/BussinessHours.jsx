import React from "react";
import AppLayout from "./AppLayout";

const BussinessHours = () => {
  const hours = [
    { day: "MONDAY", time: "9 AM - 9 PM" },
    { day: "TUESDAY", time: "9 AM - 9 PM" },
    { day: "WEDNESDAY", time: "CLOSED" },
    { day: "THURSDAY", time: "9 AM - 9 PM" },
    { day: "FRIDAY", time: "9 AM - 9 PM" },
    { day: "SATURDAY", time: "9 AM - 9 PM" },
    { day: "SUNDAY", time: "9 AM - 9 PM" },
  ];
  return (
    <AppLayout>
      <div className="flex sm:justify-between  my-10 flex-wrap gap-4 justify-center">
        <div className="">
          <h2 className="text-center text-xl sm:text-2xl  font-bold mb-4 text-white">
            BUSINESS HOURS
          </h2>
          <div className="bg-[#35322C] border border-[#FBBB17] text-white p-6 rounded-lg shadow-lg sm:w-[400px] sm:h-[500px] mx-auto">
            <ul>
              {hours.map((hour, index) => (
                <li
                  key={index}
                  className="flex justify-between py-1 border-b border-gray-700 last:border-none mb-8 mt-8"
                >
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="text-center text-xl font-bold mb-4 text-white sm:text-2xl">
            MAKE AN APPOINTMENT
          </h2>
          <div className="bg-[#35322C] border border-[#FBBB17] text-white p-6 rounded-lg shadow-lg sm:w-[400px] sm:h-[500px] w-[200px] h-[500px] mx-auto">
            <form className="">
              <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-2 mb-8 mt-8">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"></path>
                  <path d="M12 14c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="bg-transparent flex-1 outline-none text-white"
                />
              </div>
              <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-2 mt-8">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"></path>
                  <path d="M12 14c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"></path>
                </svg>
                <input
                  type="email"
                  placeholder="Enter Your Mail"
                  className="bg-transparent flex-1 outline-none text-white"
                />
              </div>
              <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-2 mt-8">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"></path>
                  <path d="M12 14c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  className="bg-transparent flex-1 outline-none text-white"
                />
              </div>
              <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-2 mt-8">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"></path>
                  <path d="M12 14c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter Service"
                  className="bg-transparent flex-1 outline-none text-white"
                />
              </div>
              <div className="flex items-center border border-yellow-500 rounded-lg px-2 py-2 mt-8">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z"></path>
                  <path d="M12 14c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Any Note For Us"
                  className="bg-transparent flex-1 outline-none text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg mt-8"
              >
                MAKE AN APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BussinessHours;
