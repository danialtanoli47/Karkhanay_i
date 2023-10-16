"use client";
import Image from "next/image";

const PFooter = () => {
  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col mt-4 lg:mt-8 ">
      <>
        <nav className="z-30 flex-between fixed bottom-0 bg-white w-full  ">
          <div
            className="flex w-full  h-full text-gray-700 font-roboto
     "
          >
            <div className="flex w-1/3 flex-row justify-center  items-center shadow-md shadow-slate-500 hover:bg-lime-200 h-full px-2 py-2.5">
              <div className="flex ">
                <Image
                  src="assets/icons/circle-plus-gray.svg"
                  height={40}
                  width={40}
                  className="object-contain"
                />
              </div>
              <div className="flex text-lg md:text-xl font-semibold pl-2">
                Add&nbsp;<span className="hidden md:flex"> to Collection </span>
              </div>
            </div>
            <div className="flex w-1/3 flex-row items-center justify-center shadow-sm shadow-slate-500 hover:bg-lime-200 h-full px-2 py-2.5">
              <div className="flex ">
                <Image
                  src="assets/icons/buy.svg"
                  height={40}
                  width={40}
                  className="object-contain"
                />
              </div>
              <div className="flex text-lg md:text-xl font-semibold pl-2">
                Buy&nbsp;
                <span className="hidden md:flex">Product</span>
              </div>
            </div>
            <div
              className="flex w-1/3 flex-row items-center shadow-md justify-center
       shadow-slate-500 hover:bg-lime-200 h-full px-2 py-2.5"
            >
              <div className="flex ">
                <Image
                  src="assets/icons/chat2.svg"
                  height={40}
                  width={40}
                  className="object-contain"
                />
              </div>
              <div className="flex text-lg md:text-xl font-semibold pl-2">
                Chat&nbsp;
                <span className="hidden md:flex"> with Supplier </span>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex w-full min-h-[50px]"></div>
      </>
    </section>
  );
};

export default PFooter;
