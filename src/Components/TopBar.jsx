"use client";
import { countries } from "@/utils/countries";
import { languages } from "@/utils/languages";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
const TopBar = () => {
  const isBrowser = typeof window !== "undefined";
  const [selectedCountry, setSelectedCountry] = useState(
    isBrowser ? localStorage.getItem("selectedCountry") || "" : ""
  );
  const [selectedState, setSelectedState] = useState(
    isBrowser ? localStorage.getItem("selectedState") || "" : ""
  );
  const [selectedStates, setSelectedStates] = useState([]);
  const [countriesWithStates, setCountriesWithStates] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    const selectedCountry = countries.find(
      (country) => country.name === selectedCountryName
    );
    if (selectedCountry) {
      setSelectedCountry(selectedCountryName);
      setSelectedStates(selectedCountry.states);
      localStorage.setItem("selectedCountry", selectedCountryName);
      localStorage.removeItem("selectedState");
      setSelectedState("");
    } else {
      setSelectedCountry("");
      setSelectedStates([]);
      localStorage.removeItem("selectedCountry");
      localStorage.removeItem("selectedState");
    }
  };

  // Update the selected state and save to localStorage
  const handleStateChange = (event) => {
    const selectedStateName = event.target.value;
    setSelectedState(selectedStateName);
    localStorage.setItem("selectedState", selectedStateName);
  };

  if (isBrowser) {
    console.log(localStorage.getItem("selectedCountry"));
    console.log(localStorage.getItem("selectedState"));
  }
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const selectedCountryObj = countries.find(
        (country) => country.name === selectedCountry
      );
      if (selectedCountryObj) {
        setSelectedStates(selectedCountryObj.states);
      }
    }
  }, [selectedCountry]);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        // includedLanguages : "en,ms,ta,zh-CN", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
 
  }, []);

  
  return (
    <>
      <div className="flex bg-[#FF8037] md:flex-row flex-col-reverse justify-between items-center lg:px-4 px-4 py-2  montserrat">
        <div className="flex items-center justify-center sm:self-center gap-2 text-xs cursor-pointer font-normal">
          <div className="text-white font-semibold  text-[2.5vw] md:text-[1vw] mt-2 md:mt-0 lg:text-[.8vw]">
            FREE DELIVERY on all orders above 999 AED | No coupon required
          </div>
        </div>
        <div className="flex items-center self-start  justify-center font-medium gap-6 md:gap-3">
          <div className="text-lg flex items-center justify-end cursor-pointer gap-[.2vw] shrink text-white font-semibold">
            {/* <PiGlobe />/ */}
            {/* <select
              name=""
              id=""
              className="border-none bg-transparent text-[2vw] w-full md:w-[20%] md:text-[.8vw] font-semibold "
            >
              <option>Language</option>
              {languages.map((lang, ind) => (
                <option key={ind} value={lang.name} className="text-black">
                  {lang.name} {lang.native}
                </option>
              ))}
            </select> */}
            <div className="overflow-hidden" style={{width:'clamp(80px, 15vw, 136px)' , height:'28px'}}>

            <div id="google_translate_element"></div>
            </div>
          </div>
          <div className="country">
            <select
              className="p-1 md:p-2 text-[2.5vw] md:text-[.85vw] w-[28vw] md:w-[11vw] lg:w-[9vw] bg-transparent focus-visible:outline-none text-white border-2 border-white"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name} className="text-black">
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="State   ">
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="bg-transparent p-1 md:p-2 text-[2.5vw] md:text-[.85vw] w-[25vw] md:w-[11vw] lg:w-[8vw] focus-visible:outline-none text-white border-2 border-white"
            >
              <option value="" className="p-2">
                Select State
              </option>
              {selectedStates.map((state, index) => (
                <option key={index} value={state.name} className="text-black">
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
