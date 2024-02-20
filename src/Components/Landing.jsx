import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services/Services";
import BusinessListing from "./BusinessListing";
import MarketPlace from "./MarketPlace/MarketPlace";
import JobPortal from "./JobPortal";
import BoostBusiness from "./BoostBusiness";
import Faq from "./Faq";
import Blogs from "./Blogs";
import ConnectUs from "./ConnectUs";
import Footer from "./Footer";
import SubNav from "./SubNav";
import TopCategories from "./TopCategories/TopCategories";

const Landing = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Hero />
      <TopCategories/>
      <Services />
      <BusinessListing />
      <MarketPlace />
      <JobPortal />
      <BoostBusiness />
      <Faq />
      <Blogs />
      <ConnectUs />
      <Footer />
    </div>
  );
};

export default Landing;
