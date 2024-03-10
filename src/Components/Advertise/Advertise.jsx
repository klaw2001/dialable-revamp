import React from "react";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import SubNav from "../SubNav";
import Register from "../BusinessListing/Register/Register";
import grow from "../../../public/Images/grow.png"
const Advertise = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Register
        title={"Advertise with Dialable"}
        heading={"Grow Your Business"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        }
        img={grow}
      />
    </div>
  );
};

export default Advertise;
