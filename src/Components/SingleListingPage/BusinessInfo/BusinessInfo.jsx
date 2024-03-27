"use client";
import React, { useEffect, useState } from "react";
import BusinessContent from "./BusinessContent/BusinessContent";
import Boxes from "./Boxes/Boxes";
import BusinessHead from "../BusinessHead/BusinessHead";
import Loading from "@/app/loading";

import { getSingleListing } from "@/utils";
import { useParams } from "next/navigation";


const BusinessInfo = () => {
  const [singleListing, setSingleListing]=useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const mySingleListing = async () => {
      const res = await getSingleListing(id);
      console.log(res);
      setSingleListing(res);
      console.log(singleListing)
      setLoading(false);
    };
    mySingleListing();
    console.log(singleListing)
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
         
            <div>
              <BusinessHead
              company={singleListing?.company}
              placeName={singleListing?.placeName}
              thumbnail={singleListing?.thumbnail}
              phone={singleListing?.phone}
               />
              <div className="p-4 lg:px-10 lg:py-12 flex flex-col md:flex-row items-start justify-center gap-4 ">
                <div className="w-full md:w-[65%]">
                  <BusinessContent
                    placeName={singleListing?.placeName}
                    desc={singleListing?.description}
                  />
                </div>
                <div className="w-full md:w-[33%]">
                  <Boxes 
                  phone={singleListing?.phone}
                  email={singleListing?.email}
                  website={singleListing?.website}
                  twitter={singleListing?.twitter}/>
                  
                </div>
              </div>
            </div>
        </>
      )}
    </div>
  );
};

export default BusinessInfo;
