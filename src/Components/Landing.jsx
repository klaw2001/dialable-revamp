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
import RentalMarquee from "./RentalMarquee/RentalMarquee";

const Landing = () => {
  return (
    <div>
     
      <Hero />
      <TopCategories />
      <RentalMarquee/>
      <RentalProducts />
      <OurPartners />
      <Posts />
      <ValuedPartners />
      <NewsLetter
        className="m-0  md:m-10 gradient p-10 lg:px-20 lg:py-10 text-white flex-col flex  justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Subscribe our newsletter"
        color="text-white"
      />
      <Testimonials />
    </div>
  );
};

export default Landing;
