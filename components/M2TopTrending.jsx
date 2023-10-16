"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const M2TopTrending = () => {
  const productDivHeight = 130;

  //carousel products
  const trending1List = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/sports/Uf878f74332c945f9966f20f7672f0386g.png_960x960.webp",
      description:
        "set of 2 wooden table tennis racket with balls table tennis racket with customize design and size",
      price: "USD 5.00 - 4.50",
      moq: "24 sets",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/sports/H3a40c9c07fa34006ad0035b7ad96ffab8.jpg_960x960.webp",
      description:
        "Sialkot manufacturer's Sports Products football hand stitched size 5 official gift ball for sport soccer",
      price: "$ 0.98 - 1.00",
      moq: "200 pcs",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/sports/Ha906d05c9f50484e8eaab5177977da4ea.jpg_960x960.webp",
      description:
        "Youth Adult Baseball Gloves Softball Gloves PU Leather Left Hand Gloves 10.5/11.5/12.5 Great for Right Hand Throw",
      price: "USD 0.98 - 3.98",
      moq: "5000 pcs",
    },
  ];
  const trending2List = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/medicalsupplies/H22fd5530180648b09c64e6a592b9f5aeW.jpg_960x960.webp",
      description:
        "Medical Supplies 1Ml Disposable Plastic Safty Three-Part Empty Cosmetic Syringes With Needle",
      price: "USD 0.015 - 0.02",
      moq: "100 pcs",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/medicalsupplies/H772319eecc4548e7a3868856aae13390G.jpg_960x960.webp",
      description:
        "Waterproof First Aid Survival Emergency Kit Empty Bag with Medical Supplies First Aid Kit",
      price: "$ 1.70 - 2.80",
      moq: "100 pcs",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/medicalsupplies/Hf92eff2648174ad2ae1bfd3f6be52fb3c.jpg_960x960.webp",
      description:
        "Acd Gel PRP Tube For Sale 15ml Platelet Rich Plasma PRP Tube Set Medical Supplies High Quality PRP Tube",
      price: "USD 0.98 - 3.98",
      moq: "5000 pcs",
    },
  ];
  const trending3List = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/minerals/H5f18817206b04e178d151bea41fb2e75A.jpg_960x960.webp",
      description:
        "Natural Rock Chalcopyrite Crystal Cluster Raw Rough Pyrite With red Quartz Pyrite In Crystal Mineral Specimen",
      price: "USD 49.00 - 58.00",
      moq: "20 kg",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/minerals/H5a3d03eef5e04460bd61f8d83f1d7649I.jpg_960x960.webp",
      description:
        "Natural Rough Realgar Stone Mineral Specimen Rock Orange Realgar For Paint Pigment",
      price: "$ 20.00 - 25.80",
      moq: "50 kg",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/minerals/H268759f540cb4c44aa1b3f3d91cc2bd0L.jpg_960x960.webp",
      description:
        "Factory sale green malachite rock specimens raw mineral specimens green fibrous malachite for sale",
      price: "USD 89.00 - 118.00",
      moq: "30 kg",
    },
  ];
  const trending4List = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/agricultural/H30e223400cf5478bb7adc913f67f2fa8G.jpg_960x960.webp",
      description:
        "Agriculture use factory price Npk base fertil Humic Acid Granular Organic Fertilizer",
      price: "USD 0.22 - 0.26",
      moq: "25 kg",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/agricultural/H7479e98185e948e6977b3004d7a9c3b0p.png_960x960.webp",
      description:
        "Silicone Fertilizer Plant Growth Potassium humate CAS 68514-28-3",
      price: "$ 22",
      moq: "50 kg",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/agricultural/H883dede4f81949d0b6472858827679baw.jpg_960x960.webp",
      description:
        "On Time Agricultural Grade Bio-organic Fertilizer Delivery Organic Fertilizer Factory Compost Amino Acid Organic Fertilizer 100%",
      price: "USD 190.00 - 290.00",
      moq: "2 tons",
    },
  ];

  //carousel products
  const trending1Products = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/H7023a060c8b54104a259eddebec3b7beu.jpg_960x960.webp",
      description:
        "Customized Eco Friendly 8oz Insulated Disposable Ripple Wall Paper Coffee Cup for Hot Drinks",
      price: "$0.0255 - $0.0288",
      moq: "100000 pcs",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/H946b11fa6e3745048aa45038d7030d964.jpg_960x960.webp",
      description:
        "Food grade biodegradable soup salad food packing box container food kraft paper bowls for disposable take-out",
      price: "$0.07 - $0.09",
      moq: "50 pcs",
    },
  ];

  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col mt-8 lg:mt-12 ">
      <>
        {/*Banner Text */}
        <div className="relative flex-row  justify-between w-full pb-1">
          <div className="flex px-2.5 md:py-2.5 py-4 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            Top Trending Products
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

        <div className="flex flex-row flex-wrap w-full ">
          {/* Category 1 */}
          <div className="flex-col  border-y-8 border-x-1 border-lime-300  w-1/2 lg:w-1/4   bg-lime-200  ">
            <div className="w-full flex justify-center text-xl font-semibold text-gray-700">
              <p className="flex text-left py-1 pt-4">Sports Items</p>
            </div>
            <div className="flex-col px-1">
              {/*product */}

              {trending1List.map((product) => (
                <Link
                  href=""
                  onClick={() => {}}
                  key={product.id}
                  className={`flex  w-full  h-[108px]  border-2 border-gray-300  bg-gray-100 rounded-md hover:bg-lime-100 mb-0.5`}
                >
                  <div className="flex flex-col ">
                    <div className={`p-0.5 pr-2 flex w-full flex-row`}>
                      <div className="relative flex  flex-shrink-0 p-0.5 ">
                        <Image
                          src={product.imageSrc}
                          alt={product.description}
                          width={80}
                          height={80}
                          className="object-contain rounded-md "
                        />
                        <button className="absolute bottom-1 left-1 opacity-80 rounded-full">
                          <Image
                            src={"assets/icons/circle-plus-gray.svg"}
                            alt="Description of the image"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </button>
                      </div>
                      <div className="pl-0.5 flex flex-col justify-between flex-shrink">
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
                </Link>
              ))}
            </div>
            <button className="w-full  flex justify-center text-md font-semibold text-gray-700">
              <p className="flex text-left underline py-0.5">
                All Sports Items
              </p>
            </button>
          </div>
          {/* Category 2 */}
          <div className="flex-col  border-y-8 border-x-1 border-lime-300  w-1/2 lg:w-1/4   hover:bg-lime-200 bg-lime-50 ">
            <div className="w-full flex justify-center text-xl font-semibold text-gray-700">
              <p className="flex text-left py-1 pt-4">Medical Supplies</p>
            </div>
            <div className="flex-col px-1">
              {/*product */}

              {trending2List.map((product) => (
                <div
                  onClick={() => {
                    alert("modal of product id:" + product.id);
                  }}
                  key={product.id}
                  className={`flex  h-[108px] w-full  border-2 border-gray-300  bg-gray-100 rounded-md hover:bg-lime-100 mb-0.5`}
                >
                  <div className="flex flex-col ">
                    <div className={`p-0.5 pr-2 flex w-full flex-row`}>
                      <div className="relative flex  flex-shrink-0 p-0.5 ">
                        <Image
                          src={product.imageSrc}
                          alt={product.description}
                          width={80}
                          height={80}
                          className="object-contain rounded-md "
                        />
                        <button className="absolute bottom-1 left-1 opacity-80 rounded-full">
                          <Image
                            src={"assets/icons/circle-plus-gray.svg"}
                            alt="Description of the image"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </button>
                      </div>
                      <div className="pl-0.5 flex flex-col justify-between flex-shrink">
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
            <button className="w-full flex justify-center text-md font-semibold text-gray-700">
              <p className="flex text-left underline py-0.5">
                All Medical Supplies
              </p>
            </button>
          </div>

          {/* Category 3 */}
          <div className="flex-col border-y-8 border-x-1 border-lime-300 w-1/2 lg:w-1/4   hover:bg-lime-200 bg-lime-50 ">
            <div className="w-full flex justify-center text-xl font-semibold text-gray-700">
              <p className="flex text-left py-1 pt-4">Minerals</p>
            </div>
            <div className="flex-col px-1">
              {/*product */}

              {trending3List.map((product) => (
                <div
                  onClick={() => {
                    alert("modal of product id:" + product.id);
                  }}
                  key={product.id}
                  className={`flex   h-[108px] border-2 border-gray-300  w-full bg-gray-100 rounded-md hover:bg-lime-100 mb-0.5`}
                >
                  <div className="flex flex-col ">
                    <div className={`p-0.5 pr-2 flex w-full flex-row`}>
                      <div className="relative flex  flex-shrink-0 p-0.5 ">
                        <Image
                          src={product.imageSrc}
                          alt={product.description}
                          width={80}
                          height={80}
                          className="object-contain rounded-md "
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
                          className="absolute bottom-1 left-1 opacity-80 rounded-full"
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
                      <div className="pl-0.5 flex flex-col justify-between flex-shrink">
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
            <button className="w-full flex justify-center text-md font-semibold text-gray-700">
              <p className="flex text-left underline py-0.5">All Minerals</p>
            </button>
          </div>

          {/* Category 4 */}
          <div className="flex-col  border-y-8 border-x-1 border-lime-300  w-1/2 lg:w-1/4   hover:bg-lime-200 bg-lime-50 ">
            <div className="w-full flex justify-center text-xl font-semibold text-gray-700">
              <p className="flex text-left py-1 pt-4">Agricultural</p>
            </div>
            <div className="flex-col px-1">
              {/*product */}

              {trending4List.map((product) => (
                <div
                  onClick={() => {
                    alert("modal of product id:" + product.id);
                  }}
                  key={product.id}
                  className={`flex  h-[108px] w-full  border-2 border-gray-300  bg-gray-100 rounded-md hover:bg-lime-100 mb-0.5`}
                >
                  <div className="flex flex-col ">
                    <div className={`p-0.5 pr-2 flex w-full flex-row`}>
                      <div className="relative flex  flex-shrink-0 p-0.5 ">
                        <Image
                          src={product.imageSrc}
                          alt={product.description}
                          width={80}
                          height={80}
                          className="object-contain rounded-md "
                        />
                        <button className="absolute bottom-1 left-1    opacity-80 rounded-full">
                          <Image
                            src={"assets/icons/circle-plus-gray.svg"}
                            alt="Description of the image"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </button>
                      </div>
                      <div className="pl-0.5 flex flex-col justify-between flex-shrink">
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
            <button className="w-full flex justify-center text-md font-semibold text-gray-700">
              <p className="flex underline py-0.5">All Agricultural</p>
            </button>
          </div>
        </div>
        {/*Banner Text */}
        <div className="  flex-row justify-end bg-lime-300  w-full ">
          <button className="hover:bg-lime-200 w-full h-full">
            <h1 className="underline underline-offset-8 justify-end flex px-2.5 md:py-2.5 pb-3 mt-2 text-xl font-bold leading-[1.15] text-black  text-right">
              View All Trending Products
              <br className="max-md:hidden" />
            </h1>
          </button>
        </div>
      </>
    </section>
  );
};

export default M2TopTrending;
