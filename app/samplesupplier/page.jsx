/*Sample Product */

"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";

import { useState, useEffect, useRef } from "react";
/**START Providers & Session Variables */
//carousel products
const carousel1Products = [
  {
    id: 1,
    imageSrc:
      "/assets/images/products/H7023a060c8b54104a259eddebec3b7beu.jpg_960x960.webp",
    description:
      "Customized Eco Friendly 8oz Insulated Disposable Ripple Wall Paper Coffee Cup for Hot Drinks",
    price: "USD 0.0255 - 0.0288",
    moq: "100000 pcs",
  },
  {
    id: 2,
    imageSrc:
      "/assets/images/products/H946b11fa6e3745048aa45038d7030d964.jpg_960x960.webp",
    description:
      "Food grade biodegradable soup salad food packing box container food kraft paper bowls for disposable take-out",
    price: "USD 0.07 - 0.09",
    moq: "50 pcs",
  },
  {
    id: 3,
    imageSrc:
      "/assets/images/products/Hf589749ef3bd492793b1109e34e84a0dQ.jpg_960x960.webp",
    description:
      "High quality biodegradable double wall paper coffee cup with custom logo",
    price: "USD 0.05 - 0.25",
    moq: "500 pcs",
  },
  {
    id: 4,
    imageSrc:
      "/assets/images/products/H4ee42cbf16bd499caf661a4684a7ee7ft.jpg_960x960.webp",
    description:
      "Custom disposable salad paper box packaging food grade kraft paper box",
    price: "USD 0.01 - 0.02",
    moq: "10000 pcs",
  },
  {
    id: 5,
    imageSrc:
      "/assets/images/products/H3e3a3f09de854133b32af8d72e3e9471w.jpg_960x960.webp",
    description:
      "Custom printed 4oz 8 oz 10oz 300ml kraft soup bowl food packaging containers disposable paper ice cream cup with lids",
    price: "USD 0.01",
    moq: "1 piece",
  },
];
const ProductPage = () => {
  //product images
  const productImages = [
    {
      id: 1,
      imageSrc:
        "/assets/images/products/sampleproduct/H7023a060c8b54104a259eddebec3b7beu.jpg_960x960.webp",
    },
    {
      id: 2,
      imageSrc:
        "/assets/images/products/sampleproduct/H72582139d25c45379bb77c14230158851.jpg_960x960.webp",
    },
    {
      id: 3,
      imageSrc:
        "/assets/images/products/sampleproduct/H46374d9acd3846e38020b0e6704bd8ea9.jpg_960x960.webp",
    },
    {
      id: 4,
      imageSrc:
        "/assets/images/products/sampleproduct/H7799d6e316bf40cf9dfbf223a903ad7fQ.jpg_960x960.webp",
    },
    {
      id: 5,
      imageSrc:
        "/assets/images/products/sampleproduct/Hff0be807343b4ab6af99c842505beb512.jpg_960x960.webp",
    },
  ];

  //product characteristics 1
  const productVolume = [
    {
      id: 1,
      Volume: "8 oz",
    },
    {
      id: 2,
      Volume: "12 oz",
    },
    {
      id: 3,
      Volume: "16 oz",
    },
    {
      id: 4,
      Volume: "24 oz",
    },
  ];

  const specTable1 = [
    {
      col1: "Product Name",
      col2: "Ripple Wall Paper Cup",
    },
    {
      col1: "Material",
      col2: "Food Grade Cup Paper",
    },
    {
      col1: "Color",
      col2: "Customized Colors",
    },
    {
      col1: "Paper Weight",
      col2: "210gsm-340gsm",
    },
    {
      col1: "Capacity",
      col2: "8oz/12oz/16oz/24oz",
    },
    {
      col1: "Logo",
      col2: "Customized Logo Accepted",
    },
    {
      col1: "Feature",
      col2: "Disposable, Eco-friendly",
    },
    {
      col1: "Printing",
      col2: "Flexo Printing, Offset Printing",
    },
    {
      col1: "Usage",
      col2: "Milk,tea,coffee,drink or other cold and hot drinks",
    },
    {
      col1: "Package",
      col2: "25pcs/bag,20 bags/carton,500pcs/carton",
    },
  ];

  const supplierDetails = [
    {
      col1: "Company Name",
      col2: "Zaheer Indus Imp. & Exp. Co.",
    },
    {
      col1: "Business type",
      col2: "Multispecialty supplier",
    },
    {
      col1: "Main Products",
      col2: "Paper Cup, PLA Tableware, Papre Bag, Sugarcane Tableware, Cornstarch Tableware",
    },
    {
      col1: "Total Annual Revenue",
      col2: "Confidential",
    },

    {
      col1: "Country / Region",
      col2: "Pakistan, Lahore",
    },
    {
      col1: "Total employees",
      col2: "11 - 50 People",
    },
    {
      col1: "Year established",
      col2: "2018",
    },
  ];

  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col mt-4 lg:mt-8 ">
      <>
        {/*Product Name and Supplier Name */}
        <div className="flex flex-col w-full px-3 pb-4 lg:pb-8">
          <div className="flex flex-row">
            <div className="flex ">
              <Image
                src="/assets/images/supplier/packaging/zaheer_indus-logo.png"
                width={60}
                height={60}
                className="mr-5"
              />
            </div>
            {/*Name & Status */}
            <div className="flex flex-col">
              <p className="flex w-full text-xl  lg:text-2xl font-semibold">
                Zaheer Indus Imp. & Exp. Co.
              </p>

              <div className="flex w-full">
                <p className="flex">
                  <span className="pr-2">
                    <Image
                      src="/assets/icons/verified.svg"
                      width={25}
                      height={25}
                      className=" "
                    />
                  </span>
                  Verified by Karkhanay
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-3">
            <p className="pl-[82px] text-lg">
              {" "}
              Zaheer Indus was founded in 1999 and provides all paper and
              plastic based packaging solutions.
            </p>
          </div>
          <div className="flex flex-row ">
            <p className="pl-[82px] text-md font-semibold">
              {" "}
              PACKAGING | PRINTING | RAW MATERIAL
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-start w-full">
          <div className="items-center text-center justify-center px-4 flex h-[60px] border-b-4 border-gray-300 bg-lime-300">
            <div className="flex text-lg font-semibold items-center">
              Featured Products
            </div>
          </div>
          <div className="items-center text-center justify-center px-4 flex h-[60px] border-b-4 border-gray-200 bg-gray-200">
            <div className="flex text-lg font-semibold items-center">
              Supply Categories
            </div>
          </div>
          <div className="items-center text-center justify-center px-4 flex h-[60px] border-b-4 border-gray-200 bg-gray-200">
            <div className="flex text-lg font-semibold items-center">
              Shipping Capability
            </div>
          </div>
          <div className="items-center text-center justify-center px-4 flex h-[60px] border-b-4 border-gray-200 bg-gray-200">
            <div className="flex text-lg font-semibold items-center">
              Processes & Technology
            </div>
          </div>

          <div className="items-center text-center justify-center px-4 flex h-[60px] border-b-4 border-gray-200 bg-gray-200">
            <div className="flex text-lg font-semibold items-center">FAQs</div>
          </div>
        </div>
        {/*Product Images & Detail */}
        <div className="flex flex-col md:flex-row w-full bg-gray-300  py-1.5 px-1 ">
          {/*Product Images */}
          <div className="flex flex-col m-1 w-full py-5 rounded-lg bg-white    md:justify-start">
            <div className="flex flex-col ">
              <div className="flex ml-3 font-semibold text-lg">
                Highlighted by Supplier:
              </div>
              <div className="flex flex-row pl-3">
                <div className="flex justify-center flex-row flex-wrap overflow-scroll scrollbar-hide lg:max-h-[380px] gap-2  ">
                  {/*individual product */}
                  {carousel1Products.slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      href="/sampleproduct"
                      className={`flex  w-[280px] rounded-lg   bg-gray-100 hover:bg-lime-100 mx-0.5 my-0 lg:mx-0 lg:my-0.5`}
                    >
                      <div className="flex flex-col ">
                        <div className={`p-0.5 pr-2 flex  flex-row`}>
                          <div className="relative flex  flex-shrink-0 p-0.5 ">
                            <Image
                              src={product.imageSrc}
                              alt={product.description}
                              width={120}
                              height={120}
                              className="object-contain rounded-md "
                            />
                            <button className="absolute bottom-1 left-1  opacity-80">
                              <Image
                                src={"assets/icons/circle-plus-gray.svg"}
                                alt="Description of the image"
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </button>
                          </div>
                          <div className="pl-1 flex flex-col flex-shrink">
                            <p className="text-sm overflow-ellipsis overflow-hidden wrap  line-clamp-4">
                              {product.description}
                            </p>
                            <div className="pt-1">
                              <p className="text-xs font-semibold">
                                {product.price}
                              </p>
                              <p className="text-xs">
                                <span className=" font-semibold pr-0.5">
                                  MOQ:
                                </span>{" "}
                                {product.moq}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex ml-3 mt-3 font-semibold text-lg">
                Most Purchased:
              </div>
              <div className="flex flex-row pl-3">
                <div className="flex justify-center flex-row flex-wrap overflow-scroll scrollbar-hide lg:max-h-[380px] gap-2  ">
                  {/*individual product */}
                  {carousel1Products.slice(3, 4).map((product) => (
                    <Link
                      key={product.id}
                      href="/sampleproduct"
                      className={`flex  w-[280px] rounded-lg   bg-gray-100 hover:bg-lime-100 mx-0.5 my-0 lg:mx-0 lg:my-0.5`}
                    >
                      <div className="flex flex-col ">
                        <div className={`p-0.5 pr-2 flex  flex-row`}>
                          <div className="relative flex  flex-shrink-0 p-0.5 ">
                            <Image
                              src={product.imageSrc}
                              alt={product.description}
                              width={120}
                              height={120}
                              className="object-contain rounded-md "
                            />
                            <button className="absolute bottom-1 left-1  opacity-80">
                              <Image
                                src={"assets/icons/circle-plus-gray.svg"}
                                alt="Description of the image"
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </button>
                          </div>
                          <div className="pl-1 flex flex-col flex-shrink">
                            <p className="text-sm overflow-ellipsis overflow-hidden wrap  line-clamp-4">
                              {product.description}
                            </p>
                            <div className="pt-1">
                              <p className="text-xs font-semibold">
                                {product.price}
                              </p>
                              <p className="text-xs">
                                <span className=" font-semibold pr-0.5">
                                  MOQ:
                                </span>{" "}
                                {product.moq}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Supplier*/}
        <div className="pt-3 px-3 relative flex-row  justify-between w-full pb-1">
          <div className="gap-3  flex flex-col  md:py-2.5 py-2 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            <p className="underline underline-offset-8 pb-2">
              Supplier Details
            </p>

            <div className="gap-2 flex flex-col">
              <div className="flex flex-row gap-4">
                <div className="flex">
                  <button
                    onClick={() => alert("sample modal")}
                    className="product_button"
                  >
                    <span className="hidden sm:flex">View&nbsp;</span>Reviews
                  </button>
                </div>
                <div className="flex flex-row">
                  <button
                    onClick={() => alert("sample modal")}
                    className="product_button"
                  >
                    Rate Supplier
                  </button>
                </div>
                <div className="flex flex-row">
                  <button
                    onClick={() => alert("sample modal")}
                    className="product_button"
                  >
                    Add to Collection
                  </button>
                </div>
              </div>
              {/*Spec Table Details */}
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  About Supplier:
                </div>
                <table class="min-w-full divide-y border-2 border-gray-400 divide-gray-400 text-md bg-white font-normal text-sm text-gray-800 ">
                  <thead>
                    {supplierDetails.slice(0, 1).map((spec) => (
                      <tr>
                        <th class="px-3 py-3 bg-gray-50 text-left leading-4   tracking-wider">
                          {spec.col1}
                        </th>
                        <th class="px-3 py-3 bg-gray-50 text-left leading-4  tracking-wider">
                          {spec.col2}
                        </th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y bg-gray-100 divide-gray-400">
                    {supplierDetails
                      .slice(1, supplierDetails.length)
                      .map((spec) => (
                        <tr>
                          <td class="px-3 py-3 font-semibold whitespace-no-wrap">
                            {spec.col1}
                          </td>
                          <td class="px-3 py-3 whitespace-no-wrap">
                            {spec.col2}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="divider"></div>
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  Supplier Brochure:
                  <div className="flex">
                    <button
                      onClick={() => alert("sample modal")}
                      className="product_button"
                    >
                      View PDF
                    </button>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default ProductPage;
