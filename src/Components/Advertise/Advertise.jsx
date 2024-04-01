import React from "react";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import SubNav from "../SubNav";
import Register from "../BusinessListing/Register/Register";
import grow from "../../../public/Images/grow.png";
import Stories from "../BusinessListing/Stories/Stories";
import FaqSection from "../BusinessListing/FaqSection/FaqSection";
import Footer from "../Footer";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Competition from "./Competition/Competition";
const Advertise = () => {
  return (
    <div>
    
      <Register
        title={"Advertise with Dialable"}
        heading={"Grow Your Business"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        }
        img={grow}
      />
      <Features/>
      <Stories />
      <Pricing/>
      <Competition/>
      <FaqSection />

    </div>
  );
};

export default Advertise;
