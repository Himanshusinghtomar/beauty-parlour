import React from 'react'
import AppLayout from "./AppLayout";
import { Link, useParams } from "react-router-dom";
import service from "./MockData/ServiceMock"
const ServicePage = () => {
     const { id } = useParams();
  const product = service.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      <AppLayout>
        <Link to="/">
          <button class="bg-[#354956] hover:bg-[#000000] text-white font-bold py-2 px-4 rounded mt-5 mx-2">
            Back
          </button>
        </Link>
        <div class="grid sm:grid-cols-2 gap-4 grid-cols-1 bg-[#ECECEC] my-10">
          <div className="  flex  mx-2 sm:mx-auto">
            <div className="flex-col gap-4">
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full  border-2 sm:border-4  border-[#000000]"
              />
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full border-2 sm:border-4 border-[#000000]"
              />
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full border-2 sm:border-4  border-[#000000]"
              />
            </div>
            <div className="">
              <img
                src={product.img}
                alt=""
                className=" h-[300px] sm:h-[600px] w-full border-2 sm:border-4  border-[#000000]"
              />
            </div>
          </div>

          <div className="  mx-2 lg:mx-20">
            <h2 className="font-bold  text-[30px] sm:text-[38px]  text-[#3D3D3D]">
              Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
            </h2>
            {/* <div className="flex mt-6 ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <h2 className="pt-1 pl-1 font-semibold text-[35px]">(218)</h2>
            </div> */}
            <div className="  mt-4 sm:mt-8 font-normal text-[16px] sm:text-[20px] tracking-[1px]">
              <p>
                A lightweight, usually knitted, pullover shirt, close-fitting
                and with a round neckline and short sleeves, worn as an
                undershirt or outer garment.
              </p>
            </div>
            <div className=" w-[100%] sm:w-[80%]  mt-8 sm:mt-20">
              <a href="https://api.whatsapp.com/send?phone=+919530243375&text=Hello!">
                <button class="bg-[#354956] hover:bg-[#000000] text-white font-bold py-2 px-4 rounded  w-[100%]">
                  Button
                </button>
              </a>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default ServicePage