"use client";

import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Filters = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("Aluminium");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [price, setPrice] = useState(0);
  const [age, setAge] = useState(0);
  return (
    <div className="px-6">
      <div className=" border-black border-b">
        <h1 className="text-[1.5vw] text-black font-semibold Inter">Filters</h1>
        <div className="py-4">
          <ul>
            {[
              "All",
              "Mobility Aids",
              "Compression Garments",
              "Hospital and homecare furrniture",
              "Respiratory care",
              "Daignostic tool and supplies",
              "Orthopedic supports",
              "Active Daily Living-ADL",
              "Used products",
            ].map((item, i) => (
              <li key={i} className="mb-4 cursor-pointer font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter"> Brands</h1>
        <div className="py-4">
          <ul>
            {[
              "Ani Rehab (12)",
              "Apex (2)",
              "Drive Medical (11)",
              "Akces Med (12)",
              "Rehamo (50)",
            ].map((item, i) => (
              <li
                key={i}
                className="mb-4 flex items-center gap-3 cursor-pointer font-medium"
              >
                <input
                  type="checkbox"
                  className="rounded-none p-2"
                  name=""
                  id="brands"
                />{" "}
                <label htmlFor="brands">{item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Color</h1>
        <div className="flex gap-14 pt-4">
          {/* First Column */}
          <ul className="flex flex-col justify-start gap-2">
            {["All", "Purple", "Black", "Gold", "White", "Bronze"].map(
              (item, i) => (
                <li
                  key={i}
                  className="mb-4 flex items-center  cursor-pointer font-medium"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="brand relative rounded-full h-[1.3em] w-[1.3em] text-white bg-white align-middle appearance-none border border-black outline-none cursor-pointer checked:bg-[purple] checked:text-white"
                      name=""
                    />
                    <label htmlFor="firstcolumn">{item}</label>
                  </div>
                </li>
              )
            )}
          </ul>
          {/* Second Column */}
          <ul className="flex flex-col justify-start gap-2">
            {["Blue", "Grey", "Silver", "Green", "Red", "Maroon"].map(
              (item, i) => (
                <li
                  key={i}
                  className="mb-4 flex items-center gap-3 cursor-pointer font-medium"
                >
                  <div>
                    <input
                      type="checkbox"
                      className="brand relative rounded-full h-[1.3em] w-[1.3em] text-white bg-white align-middle appearance-none border border-black outline-none cursor-pointer checked:bg-[purple] checked:text-white"
                      name=""
                    />{" "}
                    <label htmlFor="secondcolumn">{item}</label>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className=" py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Material</h1>

        <div className="flex items center pt-4 gap-2 flex-wrap w-[70%]">
          <div
            onClick={() => setSelectedMaterial("Aluminium")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
              selectedMaterial === "Aluminium"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Aluminium
          </div>
          <div
            onClick={() => setSelectedMaterial("Nylon")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
              selectedMaterial === "Nylon"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Nylon
          </div>
          <div
            onClick={() => setSelectedMaterial("All")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer  ${
              selectedMaterial === "All"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            All
          </div>
        </div>
      </div>
      <div className=" py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Gender</h1>

        <div className="flex items center pt-4 gap-2 flex-wrap w-[80%]">
          <div
            onClick={() => setSelectedGender("Male")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
              selectedGender === "Male"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Male
          </div>
          <div
            onClick={() => setSelectedGender("Female")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer ${
              selectedGender === "Female"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Female
          </div>
          <div
            onClick={() => setSelectedGender("Girls")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer  ${
              selectedGender === "Girls"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Girls
          </div>
          <div
            onClick={() => setSelectedGender("Boys")}
            className={`py-2 px-4 text-black Inter font-medium cursor-pointer  ${
              selectedGender === "Boys"
                ? "border-2 border-[#781393] bg-[#F4EBFF]"
                : "border-2 border-black"
            }`}
          >
            Boys
          </div>
        </div>
      </div>
      <div className="search py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">
          Weight Capacity
        </h1>

        <form action="" className="pt-4">
          <input
            type="text"
            placeholder="&#xF002;  Search"
            style={{ fontFamily: "Inter, FontAwesome" }}
            className="py-3 rounded-none w-full focus-visible:rounded-none focus:rounded-none focus:border-[1.5px] focus:border-black focus-visible:outline-none  text-blackInter border border-black px-4 placeholder:text-black"
          />
        </form>
      </div>
      <div className="py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Size</h1>
        <select className="py-3 mt-4 text-[1vw] font-medium Inter w-full border border-black bg-transparent  focus-visible:outline-none fous-visible:border-[1.5px]">
          <option value="">Select</option>
        </select>
      </div>
      <div className="py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">
          Price Range
        </h1>
        <div className="my-4">
          <input
            type="range"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="slider"
            name=""
            min={0}
            max={1000}
            id="price"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="number"
            step={1}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            min={0}
            max={1000}
          />
          <span>1000</span>
        </div>
      </div>
      <div className="py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Age Range</h1>
        <div className="my-4">
          <input
            type="range"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="slider"
            name=""
            min={0}
            max={100}
            id="Age"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            type="number"
            step={1}
            onChange={(e) => setAge(e.target.value)}
            value={age}
            min={0}
            max={100}
          />
          <span>100</span>
        </div>
      </div>

      <div className="py-4 border-black border-b">
        <h1 className="text-[1vw] text-black font-semibold Inter">Dark Mode</h1>
        <div>
          <Switch {...label} defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default Filters;
