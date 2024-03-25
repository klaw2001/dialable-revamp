"use client";

import React, { useState } from "react";

const ListingFilter = () => {
  const [price, setPrice] = useState(0);
  return (
    <div className="">
      <h1 className="text-[3.5vw] montserrat lg:text-[1.5vw] text-black font-semibold ">
        Filters
      </h1>

      <form className="pt-6">
        <div className="search-form flex flex-col items-start gap-4">
          <div className="form_group w-full">
            <input
              type="search"
              className="py-3 rounded-none w-full focus-visible:rounded-none focus:rounded-none focus:border-[1.5px] focus:border-black focus-visible:outline-none  text-blackInter border border-black px-4 placeholder:text-black"
              placeholder="&#xF002;  Search"
              style={{ fontFamily: "Inter, FontAwesome" }}
              name="search"
            />
          </div>
          <div className="form_group w-full">
            <h1 className="text-[3vw] md:text-[2vw] lg:text-[1vw] text-black font-semibold montserrat">
              Category
            </h1>
            <select className="py-3 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium montserrat w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
              <option value="">Select</option>
              <option value="1">Museums</option>
              <option value="2">Restaurant</option>
              <option value="3">Party Center</option>
              <option value="4">Fitness Zone</option>
              <option value="5">Game Field</option>
              <option value="6">Job &amp; Feeds</option>
              <option value="7">Shooping</option>
              <option value="8">Art Gallery</option>
            </select>
          </div>
          <div className="form_group w-full">
            <h1 className="text-[3vw] md:text-[2vw] lg:text-[1vw] text-black font-semibold montserrat">
              Location
            </h1>
            <select className="py-3 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium montserrat w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
              <option disabled="" selected="">
                Select
              </option>
              <option value="1">Dhaka</option>
              <option value="2">Delhi</option>
              <option value="3">lahore</option>
              <option value="4">Rome</option>
              <option value="5">New york</option>
              <option value="6">Pris</option>
              <option value="7">Bern</option>
              <option value="8">Bangkok</option>
            </select>
          </div>
          <div className="form_group w-full">
            <h1 className="text-[3vw] md:text-[2vw] lg:text-[1vw] text-black font-semibold montserrat">
              Country
            </h1>
            <select className="py-3 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium montserrat w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
              <option disabled="" selected="">
                Select
              </option>
              <option value="1">Bangladesh</option>
              <option value="2">India</option>
              <option value="3">Pakistan</option>
              <option value="4">Italy</option>
              <option value="5">America</option>
              <option value="6">London</option>
              <option value="7">Swizerland</option>
              <option value="8">Thailand</option>
            </select>
          </div>
          <div className="form_group w-full">
            <h1 className="text-[3vw] md:text-[2vw] lg:text-[1vw] text-black font-semibold montserrat">
              By Place
            </h1>
            <select className="py-3 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium montserrat w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
              <option disabled="" selected="">
                Select
              </option>
              <option value="1">Dhaka</option>
              <option value="2">Delhi</option>
              <option value="3">lahore</option>
              <option value="4">Rome</option>
              <option value="5">New york</option>
              <option value="6">Pris</option>
              <option value="7">Bern</option>
              <option value="8">Bangkok</option>
            </select>
          </div>
        </div>
        <div className="price-range-widget flex flex-col gap-4">
          <h4 className="text-[3vw] lg:text-[1.5vw] py-4 text-black font-semibold montserrat">
            Around Distance: 50 km
          </h4>
          <div>
            <div className="my-1 w-full">
              <input
                type="range"
                value={price}
                step={0.01}
                onChange={(e) => setPrice(e.target.value)}
                className="slider w-full"
                name=""
                min={0}
                max={1000}
                id="price"
              />
            </div>
            <div className="price-number mt-1 text-[3vw]  md:text-[2vw] lg:text-[1vw] font-medium montserrat">
              <span className="amount">$0.00 - ${`${price}`}</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-[3vw] md:text-[2vw] lg:text-[1vw]  text-black font-semibold montserrat">
              Default Price
            </h4>
            <select className="py-3 mt-4 text-[3vw] md:text-[2vw] lg:text-[1vw] font-medium montserrat w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
              <option disabled="" selected="">
                Selcted
              </option>
              <option value="1">$10-$30</option>
              <option value="2">$30-$70</option>
              <option value="3">$70-$100</option>
              <option value="4">$100-$130</option>
              <option value="5">$130-$150</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-white text-[3vw] mt-10 md:text-[2vw] lg:text-[1vw] font-medium btn py-3 px-6 bg-[#781393]"
            fdprocessedid="w10pp"
          >
            Search Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingFilter;
