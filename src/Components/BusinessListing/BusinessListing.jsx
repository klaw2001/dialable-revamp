import React from "react";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import SubNav from "../SubNav";
import Register from "./Register/Register";
import Steps from "./Steps/Steps";
import Stories from "./Stories/Stories";
import Connect from "./Connect/Connect";
import FaqSection from "./FaqSection/FaqSection";
import Footer from "../Footer";
import vector from "../../../public/Images/joblisting.png"
const BusinessListing = () => {
  return (
    <div>
  
      <Register
        title={"Free Listing with Dialable"}
        heading={"List Your Business For Free. Get Enquires!"}
        desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.`}

        img={vector}
      />
      <Steps />
      <Stories />
      <Connect />
      <FaqSection />

    </div>
  );
};

export default BusinessListing;
