"use client";

import MNav from "@components/MNav";
import PNav from "@components/PNav";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

{
  /**Start Main Component */
}
const Nav = () => {
  const currentPage = usePathname();
  const shouldRenderMainNav = currentPage !== "/sampleproduct";
  const isProductPage = currentPage === "/sampleproduct";
  const isChatPage = currentPage === "/chat";

  const showMainNav = currentPage === "/";

  return (
    <>
      <section className="w-full flex-center flex-col">
        {showMainNav ? (
          <>
            <MNav />
            <section className="w-full flex-center flex-col h-[114px]">
              Main Navigation
            </section>
          </>
        ) : (
          <>
            <PNav />
            <section className="w-full flex-center flex-col h-[57px]">
              Product Navigation
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Nav;
