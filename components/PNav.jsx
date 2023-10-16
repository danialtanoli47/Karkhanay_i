"use client";
import JoinModal from "@components/JoinModal";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import { sign } from "crypto";

const PNav = () => {
  /**START Providers & Session Variables */
  const { data: session } = useSession();

  /**START dropdown handling */
  const [dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });
  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };
  const resetDropdown = () => {
    setDropdowns({
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
    });
  };

  /**START for resetting dropdowns if a user clicks anywhere but a drop down */
  const dropdownRef = {
    dropdown1: useRef(null),
    dropdown2: useRef(null),
    dropdown3: useRef(null),
  };
  const handleOutsideClick = (event) => {
    const dropdownNames = Object.keys(dropdowns);
    let isOutsideDropdowns = true;

    for (let i = 0; i < dropdownNames.length; i++) {
      const dropdownName = dropdownNames[i];
      if (
        dropdownRef[dropdownName].current &&
        dropdownRef[dropdownName].current.contains(event.target)
      ) {
        isOutsideDropdowns = false;
        break;
      }
    }

    if (isOutsideDropdowns) {
      resetDropdown();
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  /*START for openJoin Modal */
  const [modalMounted, setModalMounted] = useState(false);
  useEffect(() => {
    setModalMounted(true);
  }, []);

  const [stateJoinModal, setStateJoinModal] = useState(false);

  const openJoinModal = () => {
    setStateJoinModal(true);
  };

  const closeJoinModal = () => {
    setStateJoinModal(false);
  };

  return (
    <section className="w-full md:px-2.5 lg:px-4 flex-center flex-col">
      <>
        <nav className="z-30 shadow-slate-500 shadow-md   flex-between fixed top-0 bg-white w-full py-2.5 px-2">
          {/*Logo-Name + dropdown */}
          <>
            <div className="flex gap-2 px-3 xl:pl-8">
              {/**Mobile Bars options */}
              <>
                <div className="sm:hidden  flex relative">
                  {!dropdowns.dropdown1 ? (
                    <button
                      type="button"
                      className=" relative top-1 px-2"
                      onClick={() => toggleDropdown("dropdown1")}
                    >
                      <Image
                        src="/assets/icons/bars-solid.svg"
                        alt="logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </button>
                  ) : null}
                  {dropdowns.dropdown1 ? (
                    <button
                      type="button"
                      className=" relative top-1 px-2"
                      onClick={() => resetDropdown()}
                    >
                      <Image
                        src="/assets/icons/bars-solid.svg"
                        alt="logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </button>
                  ) : null}
                </div>
              </>
              <Link href="/" className="flex gap-2 flex-center relative">
                <Image
                  src="/assets/icons/logo.svg"
                  alt="logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <p className="hidden sm:flex relative top-2.5 logo_text">
                  Karkhanay
                </p>
              </Link>
              {!dropdowns.dropdown1 ? (
                <button
                  className="relative top-2.5 left-1 hidden sm:flex"
                  onClick={() => {
                    toggleDropdown("dropdown1");
                  }}
                >
                  <Image
                    src="/assets/icons/caret-down-solid.svg"
                    alt="logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </button>
              ) : null}
              {dropdowns.dropdown1 ? (
                <button
                  className="relative top-2.5 left-1 hidden sm:flex"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  <Image
                    src="/assets/icons/caret-down-solid.svg"
                    alt="logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </button>
              ) : null}
            </div>
          </>

          {/* Desktop Navigation */}
          <>
            <div className="sm:flex hidden">
              {/**session?.user */}

              {session?.user ? (
                <div className="flex gap-3 lg:gap-7">
                  {/*    src={session?.user.image}
              className="rounded-full"
           */}
                  <button onClick={() => signOut()}>
                    <Image
                      src="assets/icons/chat2.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="chat"
                    />
                  </button>
                  <Link href="/track" className="">
                    <Image
                      src="assets/icons/chart.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="chart"
                    />
                  </Link>
                  <Link href="/collection" className="">
                    <Image
                      src="assets/icons/list-solid.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="collection"
                    />
                  </Link>
                  <>
                    {!dropdowns.dropdown3 ? (
                      <button
                        onClick={() => toggleDropdown("dropdown3")}
                        className=" xl:pr-8"
                      >
                        {/**src={session?.user.image}*/}
                        <Image
                          src={session?.user.image}
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile"
                        />
                      </button>
                    ) : null}
                    {dropdowns.dropdown3 ? (
                      <button
                        onClick={() => resetDropdown}
                        className=" xl:pr-8"
                      >
                        {/**src={session?.user.image}*/}
                        <Image
                          src="assets/images/profile.svg"
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile"
                        />
                      </button>
                    ) : null}
                  </>
                </div>
              ) : (
                <>
                  {/*Desktop size Links */}
                  <div className="flex px-3 gap-4 relative top-2.5">
                    <div className="nav_link">
                      <Link href="/supplier" className="relative">
                        Suppliers
                      </Link>
                    </div>

                    <div className="nav_link">
                      <Link href="/partner">Partners</Link>
                    </div>
                    <div className="nav_link">
                      <Link href="/affiliate">Affiliates</Link>
                    </div>
                  </div>

                  {/**checking if the joinModal has been mounted before showing the button so addition clicks not required */}
                  <>
                    {modalMounted && (
                      <button
                        type="button"
                        onClick={() => openJoinModal()}
                        className="join_btn  relative top-1"
                      >
                        Join
                      </button>
                    )}
                    {!modalMounted && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault(); // Disable default action
                          // Add your custom logic here
                        }}
                        className="join_btn_wait  relative top-1"
                      >
                        Join
                      </button>
                    )}
                  </>
                </>
              )}
            </div>
          </>

          {/* Mobile Navigation */}
          <>
            <div className="sm:hidden gap-4 flex relative">
              {session?.user ? (
                <>
                  <button onClick={() => signOut()}>
                    <Image
                      src="assets/icons/chat2.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="chat"
                    />
                  </button>
                  <Link href="/track" className="">
                    <Image
                      src="assets/icons/chart.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="chart"
                    />
                  </Link>
                  <Link href="/collection" className="">
                    <Image
                      src="assets/icons/list-solid.svg"
                      width={37}
                      height={37}
                      className=""
                      alt="collection"
                    />
                  </Link>
                  {!dropdowns.dropdown3 ? (
                    <div className="flex">
                      <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => toggleDropdown("dropdown3")}
                      />
                    </div>
                  ) : null}
                  {dropdowns.dropdown3 ? (
                    <div className="flex">
                      <Image
                        src="assets/images/profile.svg"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => resetDropdown}
                      />
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {/**checking if the joinModal has been mounted before showing the button so addition clicks not required */}
                  <>
                    {modalMounted && (
                      <button
                        type="button"
                        onClick={() => openJoinModal()}
                        className="join_btn  relative top-1"
                      >
                        Join
                      </button>
                    )}
                    {!modalMounted && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault(); // Disable default action
                          // Add your custom logic here
                        }}
                        className="join_btn_wait  relative top-1"
                      >
                        Join
                      </button>
                    )}
                  </>
                </>
              )}
            </div>
          </>

          {/**START dropdown-1  */}
          <>
            {dropdowns.dropdown1 && (
              <div
                ref={dropdownRef}
                className="dropdown dropdown_left w-full divide-y divide-lime-400 fixed top-20 border-lime-400 border-2"
              >
                <div className="block w-full pb-2">
                  <Link
                    href="/product-catalog"
                    className="dropdown_link block"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Explore Karkhanay
                  </Link>
                  <Link
                    href="/product-catalog"
                    className="dropdown_link block"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Product Catalog
                  </Link>
                </div>
                <ul className="block w-full pt-2 ">
                  <Link
                    href="/supplier"
                    className="dropdown_link "
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Suppliers
                  </Link>
                  <Link
                    href="/partner"
                    className="dropdown_link"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Partners
                  </Link>
                  <Link
                    href="/affiliate"
                    className="dropdown_link"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Affiliates
                  </Link>
                </ul>
                <div className="block w-full pt-2">
                  <Link
                    href="/news"
                    className="dropdown_link block"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    News & Articles
                  </Link>
                  <Link
                    href="/about"
                    className="dropdown_link block"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    About Karkhanay
                  </Link>
                  <Link
                    href="/contact"
                    className="dropdown_link block"
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </>

          {/**START dropdown-3  */}
          <>
            {dropdowns.dropdown3 && (
              <div
                ref={dropdownRef}
                className="dropdown dropdown_right w-full divide-y divide-lime-400 fixed top-20 border-lime-400 border-2"
              >
                <ul className="block w-full ">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => toggleDropdown("dropdown3")}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => toggleDropdown("dropdown3")}
                  >
                    My Orders
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => toggleDropdown("dropdown3")}
                  >
                    My Collections
                  </Link>
                </ul>
                <div className="block w-full pt-2">
                  <ul className="block w-full ">
                    <Link
                      href="/chat"
                      className="dropdown_link"
                      onClick={() => toggleDropdown("dropdown3")}
                    >
                      Open Chat
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => toggleDropdown("dropdown3")}
                    >
                      Submit Blog Post
                    </Link>
                  </ul>
                </div>
                <div className="block w-full pt-2">
                  <div className=" inline-flex justify-between px-3 gap-3">
                    <button
                      type="button"
                      onClick={signOut}
                      className="mt-2 signout_btn"
                    >
                      Sign Out
                    </button>
                    <Link
                      href={"/settings"}
                      className="rounded-full  border-4  border-gray-600 hover:border-lime-500 duration-500 mt-2 transition-all"
                    >
                      <Image
                        src="/assets/icons/settings.svg"
                        alt="dropdown"
                        width={50}
                        height={50}
                        className=" "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        </nav>
      </>
      {stateJoinModal && <JoinModal closeJoinModal={closeJoinModal} />}
    </section>
  );
};

export default PNav;
