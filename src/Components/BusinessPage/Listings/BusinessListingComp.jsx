"use client";
import React, { useEffect, useState } from "react";
import BusinessCard from "../BusinessCard";
import { getAllListings } from "@/utils";
import Loading from "@/app/loading";

const BusinessListingComp = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const myListings = async () => {
      const res = await getAllListings();
      setListings(res);
      setLoading(false);
    };
    myListings();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center gap-8 flex-wrap py-10 mb-8">
          {listings.map((listing, ind) => (
            <BusinessCard
              id={listing._id}
              thumbnail={listing.thumbnail}
              placeName={listing.placeName}
              category={listing.category}
              description={listing.description}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BusinessListingComp;
