import React from "react";
import Nav from "./Nav/Nav";
import Register from "./Register/Register";
import Steps from "./Steps/Steps";
import Stories from "./Stories/Stories";
import Connect from "./Connect/Connect";
import Footer from "../Footer";

const Joblisting = () => {
  return (
    <div>
      <Nav />
      <Register/>
      <Steps/>
      <Stories/>
      <Connect/>
      <Footer/>
    </div>
  );
};

export default Joblisting;
