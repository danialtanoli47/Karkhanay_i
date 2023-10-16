/*M4AllCategory */

"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const M4AllCategory = () => {
  const subcategories2 = [
    "Cardboard",
    "Plastic",
    "Paper",
    "Speciality",
    "Aluminium",
    "VIEW ALL",
  ];
  const subcategories1 = [
    "Insulation",
    "Mortar & Concrete",
    "Bricks & Blocks",
    "Steel & Metal",
    "Paint & Plaster",
    "Electrical Wiring",
    "Pipes",
    "VIEW ALL",
  ];
  const subcategories3 = [
    "Stiched",
    "Unstiched",
    "Customized",

    "Local & Cultural",
    "Uniforms",
    "VIEW ALL",
  ];
  const subcategories4 = ["Equipment", "Wearables", "Protection", "VIEW ALL"];
  const subcategories5 = [
    "Protective",
    "Vials & Containers",
    "Disposables",
    "VIEW ALL",
  ];
  const subcategories6 = [
    "Fertilizers",
    "Plants & Seeds",
    "Equipment",
    "VIEW ALL",
  ];

  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col mt-8 lg:mt-12 ">
      <>
        {/*Banner Text */}
        <div className="relative flex-row  justify-between w-full pb-1">
          <div className="flex px-2.5 md:py-2.5 py-4 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            Categories
            <br className="max-md:hidden" />
          </div>
        </div>

        {}
        {/*Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1 text-bold ">Construction</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories1.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300"></div>
        </div>
        {/*Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Packaging</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories2.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300 text-gray-200"></div>
        </div>
        {/*Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Clothing</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories3.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300 text-gray-200"></div>
        </div>
        {/*Gray Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Sports Items</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories4.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300"></div>
        </div>
        {/*Gray Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Medical Supplies</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories5.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300"></div>
        </div>
        {/*Gray Banner Text */}
        <div className=" w-full border-b-2 border-white bg-gray-300 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Agricultural</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories6.map((product) => (
              <li className=" border-2 border-gray-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
          <div className="flex w-full min-h[15px] h-[15px] bg-gray-300"></div>
        </div>

        <div className="flex-row justify-end bg-gray-300  w-full ">
          <button className="hover:bg-lime-200 w-full h-full">
            <h1 className="underline underline-offset-8 justify-end flex px-2.5 md:py-2.5 pb-3 mt-2 text-xl font-bold leading-[1.15] text-gray-800  text-right">
              All Categories & Sub-Categories
              <br className="max-md:hidden" />
            </h1>
          </button>
        </div>
      </>
    </section>
  );
};

export default M4AllCategory;
