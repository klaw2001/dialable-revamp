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
    
      <JobBanner/>
      <Positions/>


    </div>
  );
};

export default Joblisting;
