"use client";
import React, { useState } from "react";
import Queries from "../Queries/Queries";
import beds from "../../../../public/Images/rentalProducts/beds.png";
import UtilityBox from "../UtilityBox/UtilityBox";

const QueryComp = () => {
  const queriesData = [
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
    {
      name: "Shivam Sharma",
      qualification: `Studied English Language and Literature at Albion
            College (Graduated 1990) · 2nd March, 2023`,
      question: "How can I use my technology skills and for what?",
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.Suspendisse varius enim in eros elementum tri`,
      followers: "100k Followers",
      otherUser: "Sophie Taylor",
      otherQuestion: "Would it be possible to give a human artificial gills?",
    },
  ];

  return (
    <div className="py-8 px-4 lg:px-10 bg-[#F7F7F7] gap-6  flex flex-col md:flex-row items-start">
      <Queries queries={queriesData} img={beds} />
      <div className="grow">
        <UtilityBox
          img={beds}
          nameColor={"black"}
          infoColor={"#FF6004"}
          name={"Shivam Sharma"}
          info={"100k Followers"}
          title={"Top Members"}
        />
        <div className="mt-6">
          <UtilityBox
            img={beds}
            nameColor={"#FF6004"}
            infoColor={"black"}
            name={"Sophie Taylor"}
            info={"Would it be possible to give a human artificial gills?"}
            title={"Popular Questions"}
          />
        </div>
      </div>
    </div>
  );
};

export default QueryComp;
