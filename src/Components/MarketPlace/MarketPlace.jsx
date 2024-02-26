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
import OurNewsLetter from "../AboutUs/OurNewsLetter/OurNewsLetter.jsx";

const MarketPlace = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Offers />
      <Banner />
      <Products />
      <div className="mt-20 mb-40">
        <OurNewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
