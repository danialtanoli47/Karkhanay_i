import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Feed from "@components/Feed";
import M1Carousel from "@components/M1Carousel";
import MNewsBar from "@components/MNewsBar";
import MBannerText from "@components/MBannerText";
import M2TopTrending from "@components/M2TopTrending";
import M3TopCategory from "@components/M3TopCategory";
import M4AllCategory from "@components/M4AllCategory";
import MFooter from "@components/MFooter";

const Home = () => {
  //window/screen size properties
  const lgScreenSize = 1024;
  const productDivWidth = 280;
  const productDivHeight = 130;
  const carouselMaxHeight = 420;
  const carouselMaxWidth = 1080;

  return (
    <section className="w-full flex-center flex-col">
      <MNewsBar />
      <M1Carousel />
      <MBannerText />
      <M2TopTrending />
      <M3TopCategory />
      <M4AllCategory />
      <MFooter />
    </section>
  );
};

export default Home;
