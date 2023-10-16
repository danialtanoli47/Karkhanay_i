"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";

import { useState, useEffect, useRef } from "react";
/**START Providers & Session Variables */

const ChatPage = () => {
  //product images
  const products1 = [
    {
      id: "PN:1081",
      imageSrc:
        "/assets/images/products/sampleproduct/H7023a060c8b54104a259eddebec3b7beu.jpg_960x960.webp",
    },
    {
      id: "PN:4045",
      imageSrc:
        "/assets/images/products/sampleproduct/H72582139d25c45379bb77c14230158851.jpg_960x960.webp",
    },
    {
      id: "PN:1606",
      imageSrc:
        "/assets/images/products/sampleproduct/H46374d9acd3846e38020b0e6704bd8ea9.jpg_960x960.webp",
    },
  ];

  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    // Initial height on component mount
    setScreenHeight(window.innerHeight);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowHeight = screenHeight - 58;
  const chatHeight = windowHeight;

  return (
    <section className="w-full flex-center flex-col ">
      <>
        {/*Desktop Version */}
        <div
          className="flex w-full bg-gray-500"
          style={{ maxHeight: `${chatHeight}px`, height: `${chatHeight}px` }}
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full h-[12px] bg-gray-500"></div>

            <div className="flex flex-row w-full h-screen">
              {/*Chat List */}
              <div className=" border-x-2 border-gray-300 flex flex-col w-[440px] bg-gray-300">
                <div className="flex w-full flex-row bg-gray-100 font-semibold">
                  <button className="hover:bg-lime-200 px-2 flex flex-row items-center ">
                    <Image
                      src="assets/icons/filter-list.svg"
                      height={25}
                      width={25}
                      className="object-contain m-2"
                    />
                    <div className="flex px-2">Fiter Chat</div>{" "}
                  </button>

                  <button className="hover:bg-lime-200 px-2 flex flex-1 flex-row items-center border-x-2 border-gray-300">
                    <Image
                      src="assets/icons/invite.svg"
                      height={25}
                      width={25}
                      className="object-contain mx-2"
                    />
                    <div className="flex px-2">Invite</div>{" "}
                  </button>
                  <button className="hover:bg-lime-200 px-2 flex flex-row items-center ">
                    <Image
                      src="assets/icons/group-chat.svg"
                      height={35}
                      width={35}
                      className="object-contain mx-2"
                    />
                    <div className="flex px-2">Create Group</div>{" "}
                  </button>
                </div>
                <nav className="flex w-full  bg-lime-300 ">
                  <div className="flex w-full ">
                    <form action="" className="  flex flex-auto">
                      <div className="flex flex-auto  items-center relative">
                        <Image
                          src="/assets/icons/search.svg"
                          alt="dropdown"
                          width={25}
                          height={25}
                          className="absolute ml-1  "
                        />
                        <input
                          type="text"
                          name="search"
                          placeholder="Search within chat."
                          aria-label="Search bar"
                          className="w-full  text-md mt-2 pl-8 pr-10 py-1 mb-2 placeholder-gray-400 text-gray-800 rounded-sm border-none ring-1 ring-gray-200 focus:outline-none focus:ring focus:ring-lime-400  "
                        ></input>
                      </div>
                    </form>
                  </div>
                </nav>
                <div className="flex w-full flex-col bg-gray-200 border border-y-2 border-gray-300">
                  {/*chat item */}
                  <div className="flex flex-row w-full  ">
                    <div className="flex flex-row w-full">
                      {/*Profile Picture */}
                      <div className="m-2 min-w-[52px]">
                        <Image
                          src="/assets/images/supplier/packaging/Zaheer_Indus-logo.png"
                          height={50}
                          width={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-col ">
                        <div className="flex w-full pt-0.5">
                          <p className="text-lg font-semibold overflow-ellipsis overflow-hidden wrap  line-clamp-1">
                            Zaheer Indus Co.
                          </p>
                        </div>
                        <div className="flex w-full">
                          <p className="text-md font-normal overflow-ellipsis overflow-hidden wrap  line-clamp-1">
                            PN:1081 Last Conversation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-full items-center px-1.5">
                      <p className="relative bottom-3 text-sm font-semibold">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*Chat Window */}
              <div className="flex p-1 bg-gray-400 flex-1">
                <div className="flex flex-col w-full bg-gray-300 rounded-xl ">
                  <div className="flex w-full flex-row h-[86px] bg-gray-200 rounded-lg">
                    <div className="flex bg-gray-50 rounded-lg m-2 h-[70px] w-[70px] items-center justify-center">
                      <Image
                        src="/assets/images/supplier/packaging/Zaheer_Indus-logo.png"
                        height={60}
                        width={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-row bg-lime-100 rounded-lg m-2 h-[70px]  items-center justify-center border-2 border-lime-300">
                      <Image
                        src={products1[0].imageSrc}
                        height={60}
                        width={60}
                        className="object-contain mx-2"
                      />
                      <div className="flex flex-col mr-4">
                        <p className="font-semibold">{products1[0].id}</p>
                        <p className="font-normal text-sm">1 new message</p>
                      </div>
                    </div>
                    <div className="flex flex-row bg-gray-50 rounded-lg m-2 h-[70px]  items-center justify-center border-2 border-gray-300">
                      <Image
                        src={products1[1].imageSrc}
                        height={60}
                        width={60}
                        className="object-contain mx-2"
                      />
                      <div className="flex flex-col mr-4">
                        <p className="font-semibold">{products1[1].id}</p>
                        <p className="font-normal text-sm">Read</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full bg-gray-300">
                    <p className="pl-4 overflow-ellipsis overflow-hidden wrap  line-clamp-1">
                      <span className="font-semibold"> PN:1081 &nbsp; </span>
                      Customized Eco Friendly 8oz Insulated Disposable Ripple
                      Wall Paper Coffee Cup for Hot Drinks
                    </p>
                  </div>
                  <div className="flex w-full flex-1 flex-row justify-center items-center  bg-white my-1.5">
                    <p className="text-7xl text-gray-200 font-bold text-center ">
                      Conversation <br /> Window
                    </p>
                  </div>
                  <div className="flex w-full flex-row  bg-gray-200 rounded-lg  mb-1">
                    <div className="flex">
                      <Image
                        src="assets/icons/attachment.svg"
                        height={50}
                        width={50}
                        className="object-contain m-2"
                      />
                    </div>
                    <div className="flex flex-1">
                      <input
                        type="text"
                        name="text"
                        placeholder="Write your message."
                        aria-label="Text bar"
                        className="w-full   text-md mt-2 p-5  py-1 mb-2 placeholder-gray-400 text-gray-800 focus:outline-none rounded-lg border-2 border-gray-300   "
                      ></input>
                    </div>
                    <div className="flex">
                      <Image
                        src="assets/icons/send-message.svg"
                        height={50}
                        width={50}
                        className="object-contain m-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-[12px] bg-gray-500"></div>
          </div>
        </div>
      </>
    </section>
  );
};

export default ChatPage;
