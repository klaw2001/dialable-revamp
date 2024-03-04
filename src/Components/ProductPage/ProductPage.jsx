import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import SubNav from "../SubNav";
import Offers from "../MarketPlace/Offers/Offers";
import ProductInfo from "./ProductInfo/ProductInfo";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import Faq from "../Faq";

const ProductPage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SubNav />
      <Offers />
      <ProductInfo />
      <NewsLetter
        className="gradient p-6 lg:px-20 lg:py-32 text-white flex-col flex lg:flex-row justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Join our newsletter"
        color="text-black"
      />
      <Faq />
      <Footer />
    </div>
  );
};

export default ProductPage;
