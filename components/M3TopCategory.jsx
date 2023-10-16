"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const M3TopCategory = () => {
  const productDivHeight = 130;

  //carousel products
  const trending1Products = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/rawmaterials/H20350553135f4484bf566bb2f8127f51k.png_960x960.webp",
      description:
        "PVC resin High Quality SG-5 K67 Polyvinyl Chloride Resin PVC Plastic Raw Material",
      price: "USD 0.50 - 0.80",
      moq: "10000 kg",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/rawmaterials/H3c6deea71c2943869e5acf08a760452bH.png_960x960.webp",
      description:
        "PET material for making small preforms PET resin 100% virgin PET raw material",
      price: "USD 1,050 - 1,100",
      moq: "1 ton",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/rawmaterials/Hd76547874a604a3c88c1247f61342ea0F.jpg_960x960.webp",
      description:
        "Custom Bulk Price Soft Grey Cloth Cotton Polyester White Knit Greige Fabric Textile Raw Material For Kids Clothing Garment",
      price: "USD 1.99 - 2.89",
      moq: "500 kg",
    },
    {
      id: 4,
      imageSrc:
        "/assets/images/products/rawmaterials/H56c2d76a1283498496792cef6eb5e96aF.jpg_960x960.webp",
      description:
        "Pyrroloquinoline Quinone Disodium Salt Powder 99% Pqq For Cosmetic Raw Materials",
      price: "USD 3.00 - 6.00",
      moq: "1 kg",
    },
    {
      id: 5,
      imageSrc:
        "/assets/images/products/rawmaterials/Hd842ee8f1b4a4c65bc8636ce983d645cj.png_960x960.webp",
      description:
        "Factory Direct Iron and Steel Industry Raw Material Ferrosilicon with High Quality",
      price: "USD 1,300 - 1,500",
      moq: "10 tons",
    },
    {
      id: 6,
      imageSrc:
        "/assets/images/products/rawmaterials/HTB1zhboLxnaK1RjSZFBq6AW7VXag.jpg_960x960.webp",
      description:
        "Plastic Raw Material Prices 1.2738 Tool Steel P20+Ni Tool Resistant Round Bar Steel Price Per Kg",
      price: "USD 1,500 - 2,500",
      moq: "1 ton",
    },
    {
      id: 7,
      imageSrc:
        "/assets/images/products/rawmaterials/H8db3d61e9a974469ab152a6e8aa4e0bbW.jpg_960x960.webp",
      description:
        "Raw Material For Making Plate/Bowl/Mugs Manufacturer Clay Slip Bulk Pottery Clay High Quality Ceramic Clay",
      price: "USD 335.00 - 350.00",
      moq: "26 tons",
    },
    {
      id: 8,
      imageSrc:
        "/assets/images/products/rawmaterials/H362ac8cd152c43c8803378f125ddd201v.jpg_960x960.webp",
      description:
        "Wholesale Natural Amazonite Stone Crystals Healing Stones Bulk Rough Quartz Raw Crystal Amazonite",
      price: "USD 5.00 - 6.00",
      moq: "20 kg",
    },
  ];

  const subcategories = [
    "Cloth/ Fabric",
    "Plastics/ Polymers",
    "Wood",
    "Metal",
    "Stones/ Minerals",
    "Industrial",
    "Construction",
    "Cosmetic Material",
  ];

  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col mt-8 lg:mt-12 ">
      <>
        {/*Banner Text */}
        <div className="relative flex-row  justify-between w-full pb-1">
          <div className="flex px-2.5 md:py-2.5 py-4 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            Top Category
            <br className="max-md:hidden" />
          </div>
          <button className="flex absolute right-0 top-1 mr-5 bg-lime-100 hover:bg-lime-200 p-3 rounded-full">
            <Image
              src="assets/icons/arrows-rotate-solid.svg"
              alt="refresh"
              width={25}
              height={25}
              className="object-contain rounded-md "
            />
          </button>
        </div>

        <div className="flex w-full">
          {/* Category 1 */}
          <div className="flex-col w-full  bg-lime-300 px-1">
            <div className="w-full flex justify-center text-2xl py-2 font-semibold text-black">
              <p className="flex text-left py-1">Raw Materials</p>
            </div>
            <div className="flex flex-row w-full flex-wrap">
              {/*product */}

              {trending1Products.map((product) => (
                <div
                  onClick={() => {}}
                  key={product.id}
                  className={`flex w-1/2  border-2 border-gray-300 h-[108px] lg:w-1/4 bg-gray-100 rounded-md hover:bg-lime-50 mb-0.5`}
                >
                  <div className="flex flex-col w-full ">
                    <div className={`p-0.5 pr-2 flex w-full flex-row`}>
                      <div className="relative flex   flex-shrink-0  ">
                        <Image
                          src={product.imageSrc}
                          alt={product.description}
                          width={80}
                          height={80}
                          className="object-contain  rounded-md "
                        />
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            alert(
                              "product id:" +
                                product.id +
                                "  Saved to collection"
                            );
                          }}
                          className="absolute bottom-1 left-1  opacity-80"
                        >
                          <Image
                            src={"assets/icons/circle-plus-gray.svg"}
                            alt="Description of the image"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </button>
                      </div>
                      <div className="pl-0.5  pr-1 flex flex-col justify-between flex-shrink">
                        <p className="md:text-sm overflow-ellipsis overflow-hidden wrap line-clamp-3 text-xs md:line-clamp-3">
                          {product.description}
                        </p>
                        <div className="pt-1">
                          <p className="text-xs font-semibold overflow-ellipsis overflow-hidden line-clamp-1">
                            {product.price}
                          </p>
                          <p className="text-xs overflow-ellipsis overflow-hidden line-clamp-1">
                            <span className=" font-semibold pr-0.5">MOQ:</span>
                            {product.moq}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {}
        {/*Banner Text */}
        <div className="flext w-full bg-lime-200 font-semibold  text-lg pt-2">
          <div className="w-full flex justify-start text-2xl pb-3 px-4  font-semibold text-black">
            <p className="flex text-left py-1">Subcategories</p>
          </div>
          <ul className="flex flex-row flex-wrap h-full ">
            {subcategories.map((product) => (
              <li className=" border-2 border-lime-300 w-1/2 lg:w-1/4 pl-4 py-1.5 lg:px-12 bg-gray-100 hover:bg-lime-100">
                {product}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-row justify-end bg-lime-300  w-full ">
          <button className="hover:bg-lime-200 w-full h-full">
            <h1 className="underline underline-offset-8 justify-end flex px-2.5 md:py-2.5 pb-3 mt-2 text-xl font-bold leading-[1.15] text-gray-800  text-right">
              All Top Category Products
              <br className="max-md:hidden" />
            </h1>
          </button>
        </div>
      </>
    </section>
  );
};

export default M3TopCategory;
