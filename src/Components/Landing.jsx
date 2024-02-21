import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import SubNav from "./SubNav";
import TopCategories from "./TopCategories/TopCategories";
import RentalProducts from "./RentalProducts/RentalProducts";
import OurPartners from "./OurPartners/OurPartners";
import Posts from "./Posts";
import ValuedPartners from "./ValuedPartners/ValuedPartners";
import NewsLetter from "./NewsLetter/NewsLetter";
import Testimonials from "./Testimonials/Testimonials";

const Landing = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Hero />
      <TopCategories />
      <RentalProducts />
      <OurPartners />
      <Posts />
      <ValuedPartners />
      <NewsLetter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
