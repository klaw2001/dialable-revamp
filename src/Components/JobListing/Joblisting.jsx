import React from "react";

import Register from "./Register/Register";
import Steps from "./Steps/Steps";
import Stories from "./Stories/Stories";
import Connect from "./Connect/Connect";
import Footer from "../Footer";
import FaqSection from "./FaqSection/FaqSection";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import SubNav from "../SubNav";

const Joblisting = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <SubNav />
      <Register/>
      <Steps/>
      <Stories/>
      <Connect/>
      <FaqSection/>
      <Footer/>
    </div>
  );
};

export default Joblisting;
