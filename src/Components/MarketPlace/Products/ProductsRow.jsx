import { Drawer, theme } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import marketData from "../index.js";
import Filters from "./Filters.jsx";
import { getAllProducts } from "@/utils.js";
import Link from "next/link.js";

const ProductsRow = ({ open, onClose, placement, visibleItem }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    getProducts();
  }, []);
  // console.log(products)
  const { token } = theme.useToken();
  const containerStyle = {
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
    background: token.colorFillAlter,
  };
  return (
    <div className=" product  relative" style={containerStyle}>
      <Drawer
        title=""
        onClose={onClose}
        open={open}
        placement={placement}
        getContainer={false}
        closable={true}
        className="filter border-t border-black"
      >
        <Filters />
        <div className="border-t sticky w-full bottom-0 mt-12 bg-white border-black flex items-center justify-between p-4">
          <button className="text-black text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium">
            Clear all
          </button>
          <button className="text-white text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium btn py-3 px-6 bg-[#781393]">
            Apply
          </button>
        </div>
      </Drawer>
      <div className="flex p-6 lg:py-10 lg:px-20 items-center gap-1 md:gap-[1rem] lg:gap-[2vw] flex-wrap justify-center">
        {products ? (
          <>
          
          {products.map((product, i) => (
           <div
             key={i}
             className=" product-card grow lg:grow-0 flex-auto w-[45%] lg:w-[20vw] py-3 px-2 mb-4"
           >
             <div className="py-2 px-3 bg-[#4d7c0f]  lg:w-24 flex  font-medium items-center gap-2 text-white Inter text-[2vw] md:text-[1.5vw] lg:text-[1vw]">
               <span className="block grow ml-2 text-sm ">In Stock</span>
             </div>
             <div className="my-3 lg:my-6 mix-blend-multiply">
               <Image
                 src={product.thumbnail}
                 alt={product.name + i}
                 width={300}
                 height={300}
                 loading="lazy"
                 // className="object-cover"
               />
             </div>
             <div className="product-info mt-3 lg:mt-6">
               <div
                 className={`flex items-center text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-semibold justify-between`}
               >
                 <span
                   className={"text-[2.2vw] md:text-[2vw] lg:text-[1vw]"}
                 >
                   <Link href={`/products/${product._id}`}>
                     {product.name}
                   </Link>
                 </span>
                 <span>₹{product.price}</span>
               </div>
               <span className="text-[1.8vw] md:text-[1.2vw] lg:text-[.7vw] Inter capitalize font-normal">
                 {product.category.name}
               </span>
               {/* <div className="my-4 hidden lg:flex items-center">
     <RiStarSFill size={`1.5vw`} />
     <RiStarSFill size={`1.5vw`} />
     <RiStarSFill size={`1.5vw`} />
     <RiStarSFill size={`1.5vw`} />
     <RiStarSFill size={`1.5vw`} />
   </div>
   <div className="my-w flex lg:hidden items-center">
     <RiStarSFill size={`2.5vw`} />
     <RiStarSFill size={`2.5vw`} />
     <RiStarSFill size={`2.5vw`} />
     <RiStarSFill size={`2.5vw`} />
     <RiStarSFill size={`2.5vw`} />
   </div> */}
             </div>
           </div>
         ))}
          </>
        ) : (
          <>
           
          <h1 className="text-center py-32">Products Not Found</h1>

          </>
        )}
      </div>
    </div>
  );
};

export default ProductsRow;
