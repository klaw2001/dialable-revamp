import React from "react";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import SubNav from "../SubNav";
import Footer from "../Footer";
import JobBanner from "./JobBanner/JobBanner";
import Positions from "./Positions/Positions";


const Joblisting = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <SubNav />
      <JobBanner/>
      <Positions/>
      <Footer/>

    </div>
  );
};

export default Joblisting;
