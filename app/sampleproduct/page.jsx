/*Sample Product */

"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";

import { useState, useEffect, useRef } from "react";
/**START Providers & Session Variables */

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
    <section className="mt-10 w-full md:px-2.5 lg:px-4 flex-center flex-col ">
      <>
        {/*Product Name and Supplier Name */}
        <div className="flex flex-col w-full px-3 pb-4 lg:pb-8">
          <p className="flex w-full text-xl  lg:text-2xl font-semibold">
            Customized Eco Friendly 8oz Insulated Disposable Ripple Wall Paper
            Coffee Cup for Hot Drinks
          </p>
          <div className="flex w-full text-lg pt-2">
            <p className="flex">
              <span className="font-semibold pr-2">Supplier: </span>
              Zaheer Indus Imp. & Exp. Co.
            </p>
          </div>
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

        {/*Product Images & Detail */}
        <div className="flex flex-col md:flex-row w-full bg-gray-300 md:rounded-xl py-4 px-2 ">
          {/*Product Images */}
          <div className="flex flex-row   md:justify-start">
            {/*Product Main Image */}
            <div className="flex flex-col items-center w-full">
              <Image
                src="/assets/images/products/H7023a060c8b54104a259eddebec3b7beu.jpg_960x960.webp"
                width={340}
                height={340}
                className=" flex object-contain rounded-lg"
              />
              <div className="flex flex-row flex-wrap max-w-[340px]">
                {productImages.map((product) => (
                  <div className="flex  bg-gray-300 hover:bg-gray-400 p-0.5 ">
                    <Image
                      src={product.imageSrc}
                      width={64}
                      height={64}
                      className=" object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*Product Options & Details Container*/}
          <div className="flex flex-1 justify-start bg-white rounded-lg flex-col py-2   mt-6 md:ml-3 md:mt-0 ">
            <div className="flex flex-col ">
              {/*Price, MOQ, Info */}
              <div className="px-2 flex flex-row justify-between mb-3">
                <div className=" mt-3">
                  <div className="  ">
                    <span className=" font-semibold pr-0.5 text-lg">
                      USD 0.0255 - 0.0288
                    </span>
                    <span className="relative pr-1">/piece</span>
                  </div>
                  <div className="">
                    <span className=" text-md pr-1 ">MOQ (min. order):</span>
                    <span className=" pr-0.5  text-md font-semibold">
                      100,000
                    </span>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <Image
                    src="assets/icons/info.svg"
                    width={40}
                    height={40}
                    className=" object-contain rounded-lg"
                  />
                </div>
              </div>

              {/*Color Variations */}
              <div className="px-2 py-2 flex flex-col bg-gray-200  ">
                <div className="flex pb-2 pr-3 text-lg font-semibold">
                  Color:
                </div>
                <div className="flex">
                  <div className="flex flex-row flex-wrap gap-1 ">
                    {productImages.map((product) => (
                      <div className="h-[50px] w-[50px]">
                        <div className="hover:border-2 border-lime-200 hover:bg-lime-200 rounded-lg">
                          <Image
                            src={product.imageSrc}
                            width={50}
                            height={50}
                            className=" object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                    <div
                      onClick={() => alert("more options modal displayed")}
                      className="more_options"
                    >
                      More options - - -
                    </div>
                  </div>
                </div>
              </div>

              {/*Volume Variations */}
              <div className="px-2 py-2  flex flex-col ">
                <div className="flex pb-2 pr-3 text-lg font-semibold">
                  Volume:
                </div>
                <div className="flex">
                  <div className="flex flex-row flex-wrap gap-1 ">
                    {productVolume.map((product) => (
                      <div className="h-[35px] w-[70px] ">
                        <div className="bg-white border-2 text-center border-gray-300 hover:border-lime-200 hover:bg-lime-200 rounded-lg font-semibold">
                          {product.Volume}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*Sample Details */}
              <div className="px-2 py-2  flex flex-col  bg-gray-200">
                <div className="flex pb-2 pr-3 text-lg font-semibold">
                  Samples:
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row flex-wrap gap-1 ">
                    {productImages.slice(1, 2).map((product) => (
                      <div className="flex flex-row hover:bg-lime-200 bg-white rounded-lg p-1">
                        <div className="">
                          <Image
                            src={product.imageSrc}
                            width={50}
                            height={50}
                            className=" object-contain rounded-lg"
                          />
                        </div>
                        <div className="px-1 flex flex-col text-sm">
                          <div className="flex">Color: Any | Volume: 8oz</div>
                          <div className="flex">
                            Price: USD 0.01/piece | MOQ: 1 piece
                          </div>
                        </div>
                      </div>
                    ))}
                    {productImages.slice(2, 3).map((product) => (
                      <div className="flex flex-row hover:bg-lime-200 bg-white rounded-lg p-1">
                        <div className="">
                          <Image
                            src={product.imageSrc}
                            width={50}
                            height={50}
                            className=" object-contain rounded-lg"
                          />
                        </div>
                        <div className="px-1 flex flex-col  text-sm">
                          <div className="flex">Color: Any | Volume: 16oz </div>
                          <div className="flex">
                            Price: USD 0.015/piece | MOQ: 1 piece
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => alert("sample modal")}
                      className="product_button"
                    >
                      Request Samples
                    </button>
                  </div>
                </div>
              </div>

              {/*Deliver & LeadTime Variations */}
              <div className="px-2 py-2  flex flex-col ">
                <div className="flex pb-2 pr-3 text-lg font-semibold">
                  Delivery & Lead time:
                </div>
                <div className="flex flex-col">
                  <div className="flex ">
                    Local delivery handled by supplier.
                  </div>
                  <div className="flex ">
                    Lead time for order of less than qty: 50,000 is 12 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Details*/}
        <div className="pt-3 px-3 relative flex-row  justify-between w-full pb-1">
          <div className="gap-3  flex flex-col  md:py-2.5 py-2 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            <p className="underline underline-offset-8 pb-2"> Details</p>

            <div className="gap-2 flex flex-col">
              {/*Shipping Details */}
              <div className="flex flex-col">
                <div className="leading-8 pb-2 text-xl font-bold pr-2">
                  Shipping:
                </div>
                <div className=" leading-8 px-2  text-xl font-normal">
                  <span
                    onClick={() => alert("Chat opened with shipping query.")}
                    className="relative font-bold border-2 border-gray-300 rounded-lg px-2 h-[40px]  hover:border-lime-300 hover:bg-lime-200 bg-white "
                  >
                    Chat
                  </span>
                  &nbsp;with supplier to negotiate shipping details.{" "}
                </div>
              </div>
              <div className="divider"></div>
              {/*Payments Details */}
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  Payments:
                </div>
                <div className="flex flex-row gap-3">
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/mastercard-logo.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/visa.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/stripe.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/easypaisa-logo.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/jazzcash-logo.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="relative font-bold border-2 border-gray-300 rounded-lg  w-[90px]  hover:border-lime-300 hover:bg-lime-200 bg-white ">
                    <Image
                      src="/assets/icons/payments/bank-logo.png"
                      height={45}
                      width={90}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              {/*Returns & Refunds Details */}
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  Returns & Refunds:
                </div>
                <div className=" leading-8 px-2  text-xl font-normal">
                  Eligible for returns and refunds.
                </div>
              </div>
              <div className="divider"></div>
              {/*Reviews & Ratings*/}
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  Reviews & Ratings:
                </div>
                <div className=" leading-8 px-2  text-xl font-normal">
                  Not reviewed yet.
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex">
                    <button
                      onClick={() => alert("sample modal")}
                      className="product_button"
                    >
                      View Reviews
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => alert("sample modal")}
                      className="product_button"
                    >
                      Review Product
                    </button>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div></div>
            </div>
          </div>
        </div>
        {/*Specifications */}
        <div className="pt-3 px-3 relative flex-row  justify-between w-full pb-1">
          <div className="gap-3  flex flex-col  md:py-2.5 py-2 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            <p className="underline underline-offset-8 pb-2">
              Product Specifications
            </p>

            <div className="gap-2 flex flex-col">
              {/*Spec Table Details */}
              <div className="flex flex-col">
                <div className="leading-8 pb-3 text-xl font-bold pr-2">
                  Specifications Table:
                </div>
                <table class="min-w-full divide-y border-2 border-gray-400 divide-gray-400 text-md bg-white font-normal text-sm text-gray-800 ">
                  <thead>
                    <tr>
                      <th class="px-3 py-3 bg-gray-50 text-left leading-4   tracking-wider">
                        Product Name:
                      </th>
                      <th class="px-3 py-3 bg-gray-50 text-left leading-4  tracking-wider">
                        Ripple Wall Paper Cup
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-gray-100 divide-gray-400">
                    {specTable1.slice(1, specTable1.length).map((spec) => (
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
                  Product Brochure:
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

        {/*Supplier*/}
        <div className="pt-3 px-3 relative flex-row  justify-between w-full pb-1">
          <div className="gap-3  flex flex-col  md:py-2.5 py-2 text-2xl font-bold leading-[1.15] text-gray-800 sm:text-3xl text-left">
            <p className="underline underline-offset-8 pb-2">
              Supplier Details
            </p>

            <div className="gap-2 flex flex-col">
              <div className="flex flex-row gap-4">
                <div className="flex">
                  <Link
                    href="/samplesupplier"
                    onClick={() => {}}
                    className="product_button"
                  >
                    <span className="hidden sm:flex">View&nbsp;</span> Profile
                  </Link>
                </div>
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
