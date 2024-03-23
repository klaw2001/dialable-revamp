"use client";
import React, { useEffect, useState } from "react";
import BusinessCard from "../BusinessCard";
import { getAllListings } from "@/utils";
import Loading from "@/app/loading";
import { Drawer, theme } from "antd";
import ListingFilter from "./ListingFilter";

const BusinessListingComp = ({close, open , placement}) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(4);
  useEffect(() => {
    const myListings = async () => {
      const res = await getAllListings();
      setListings(res);
      setLoading(false);
    };
    myListings();
  }, []);
  useEffect(() => {
    const updateCardsNo = () => {
      const screenWidth = window.innerWidth;
      let cards;
      if (screenWidth >= 1024) {
        cards = 4;
      } else if (screenWidth >= 768) {
        cards = 2;
      } else {
        cards = 1;
      }
      setCardsToShow(cards);
    };
    updateCardsNo();
    window.addEventListener("resize", updateCardsNo);
    return () => {
      window.removeEventListener("resize", updateCardsNo);
    };
  }, []);
  console.log(listings);

  // off-canvas styling
  const { token } = theme.useToken();
  const containerStyle = {
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
    background: "white",
  };
  
  return (
    <div >
      <Drawer
        title=""
        onClose={close}
        open={open}
        placement={placement}
        getContainer={false}
        closable={true}
        className="filter border-t border-black"
      >
        <ListingFilter/>
      </Drawer>
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-start gap-8 flex-wrap py-10 mb-8" style={containerStyle}>
            {listings.map((listing, ind) => (
              <BusinessCard
                key={ind}
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
    </div>
  );
};

export default BusinessListingComp;
