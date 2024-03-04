import React from "react";
import marketData from "./index.js";
import Image from "next/image";
import { RiStarSFill, RiStarLine } from "react-icons/ri";
import TopBar from "../TopBar.jsx";
import Navbar from "../Navbar.jsx";
import SubNav from "../SubNav.jsx";
import Footer from "../Footer.jsx";
import Offers from "./Offers/Offers.jsx";
import Banner from "./Banner/Banner.jsx";
import Products from "./Products/Products.jsx";
import NewsLetter from "../NewsLetter/NewsLetter.jsx";

const MarketPlace = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Offers />
      <Banner />
      <Products />
      <NewsLetter
        className="bg-[#F4EBFF] p-6 lg:px-20 lg:py-32 text-black mb-16 flex-col flex lg:flex-row justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Join our newsletter"
        color="text-black"
      />
      <Footer />
    </div>
  );
};

export default MarketPlace;
