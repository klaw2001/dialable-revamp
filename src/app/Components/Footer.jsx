import React from "react";
import Logo from "../Images/dialable-logo.png";
import Image from "next/image";
import Facebook from "../Images/socials/Facebook.svg";
import Instagram from "../Images/socials/Instagram.svg";
import LinkedIn from "../Images/socials/LinkedIn.svg";
import X from "../Images/socials/X.svg";
import Youtube from "../Images/socials/Youtube.svg";
import Link from "next/link";
const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      subLinks: [
        {
          linkName: "Services",
          link: "#",
        },
        {
          linkName: "Job",
          link: "#",
        },
        {
          linkName: "Contact",
          link: "#",
        },
        {
          linkName: "FAQ",
          link: "#",
        },
        {
          linkName: "Terms",
          link: "#",
        },
      ],
    },
    {
      title: "Privacy",
      subLinks: [
        {
          linkName: "Blog",
          link: "#",
        },
        {
          linkName: "Help",
          link: "#",
        },
        {
          linkName: "Support",
          link: "#",
        },
        {
          linkName: "Feedback",
          link: "#",
        },
        {
          linkName: "Sitemap",
          link: "#",
        },
      ],
    },
    {
      title: "Partners",
      subLinks: [
        {
          linkName: "Testimonials",
          link: "#",
        },
        {
          linkName: "Investors",
          link: "#",
        },
        {
          linkName: "Carrers",
          link: "#",
        },
        {
          linkName: "Press",
          link: "#",
        },
        {
          linkName: "Events",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      subLinks: [
        {
          linkName: "Resources",
          link: "#",
        },
        {
          linkName: "Partnerships",
          link: "#",
        },
        {
          linkName: "Advertise",
          link: "#",
        },
        {
          linkName: "Become a Partner",
          link: "#",
        },
        {
          linkName: "Support Center",
          link: "#",
        },
      ],
    },
    {
      title: "Knowledge Base",
      subLinks: [
        {
          linkName: "Help & Support",
          link: "#",
        },
        {
          linkName: "Frequently Asked",
          link: "#",
        },
        {
          linkName: "Questions",
          link: "#",
        },
        {
          linkName: "Contact Us",
          link: "#",
        },
        {
          linkName: "Customer Support",
          link: "#",
        },
        {
          linkName: "Submit a Ticket",
          link: "#",
        },
      ],
    },
    {
      title: "Company",
      subLinks: [
        {
          linkName: "About Us",
          link: "#",
        },
        {
          linkName: "Our Mission",
          link: "#",
        },
        {
          linkName: "Company",
          link: "#",
        },
        {
          linkName: "News",
          link: "#",
        },
        {
          linkName: "Newsletter",
          link: "#",
        },
        {
          linkName: "Company Blog",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="p-20 mt-20 bg-[#781393]">
      <div className="top flex items-start justify-between">
        <div>
          <div className="img relative w-[12vw]">
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="montserrat text-[1vw] font-normal mt-6 text-white w-[26vw]">
            We strive to make our platform accessible to all individuals,
            including those with disabilities. If you encounter any
            accessibility barriers or have suggestions for improvement, please
            contact us at 12345 6789/ info@dialable.com
          </p>
        </div>
        <div className="socials">
          <h1 className="roboto text-[2.4vw] text-white font-medium">
            Follow Us
          </h1>
          <div className="socials_icons flex items-center gap-[1vw] my-4">
            <Link href={"#"} className="w-[2vw] relative block">
              <Image
                src={Facebook}
                alt="facebook-icon"
                className="h-full w-full"
              />
            </Link>
            <Link href={"#"} className="w-[2vw] relative block">
              <Image
                src={Instagram}
                alt="facebook-icon"
                className="h-full w-full"
              />
            </Link>
            <Link href={"#"} className="w-[2vw] relative block">
              <Image src={X} alt="facebook-icon" className="h-full w-full" />
            </Link>
            <Link href={"#"} className="w-[2vw] relative block">
              <Image
                src={LinkedIn}
                alt="facebook-icon"
                className="h-full w-full"
              />
            </Link>
            <Link href={"#"} className="w-[2vw] relative block">
              <Image
                src={Youtube}
                alt="facebook-icon"
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="links flex items-start justify-between border-t-2 border-b-2  py-16 mt-14">
        {footerLinks.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-[2vw] roboto text-white">
            <h1>{item.title}</h1>
            <div className=" flex items-start flex-col gap-[.75vw]">
              {item.subLinks.map((sublink, subIndex) => (
                <Link key={subIndex} href={sublink.link} className="text-[.8vw]">
                  {sublink.linkName}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bottom flex items-center justify-between text-white text-[1vw] font-normal roboto mt-10">
          <p>&copy;2024 Dialable. All rights reserved</p>
          <Link href={"#"}>BACK TO TOP</Link>
          <p>Credits By ABC Company</p>
      </div>
    </div>
  );
};

export default Footer;
