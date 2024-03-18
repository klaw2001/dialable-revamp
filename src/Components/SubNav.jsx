import Link from "next/link";
import React from "react";

const SubNav = () => {
  const subNavLinks = [
    {
      title: "Products",
      href: "/advertise",
    },
    {
      title: "Store",
      href: "/marketplace",
    },
    {
      title: "Support",
      href: "/contact",
    },
    {
      title: "Enablers",
      href: "#",
    },
    {
      title: "B2B",
      href: "/marketplace",
    },
    {
      title: "Employment",
      href: "/joblisting",
    },
    {
      title: "Learn",
      href: "#",
    },
    {
      title: "Community",
      href: "#",
    },
    {
      title: "Events",
      href: "#",
    },
    {
      title: "Policy",
      href: "#",
    },
    {
      title: "Change Makers",
      href: "#",
    },
    {
      title: "Alliances",
      href: "#",
    },
  ];
  return (
    <div className="py-3 md:px-4 lg:px-8 px-8 hidden bg-white md:flex items-center justify-between relative z-[98] border border-b text-black">
      {subNavLinks.map((link, i) => (
        <button key={i}>
          <Link href={link.href} className="md:text-[1.2vw] lg:text-[0.8vw] font-medium montserrat">
            {link.title}
          </Link>
        </button>
      ))}
      <div>
        <Link
          href="#"
          className="text-[0.7vw] btn shadow-xl font-semibold py-2 px-3 block border-2 border-black montserrat"
        >
          Special Offers
        </Link>
      </div>
    </div>
  );
};

export default SubNav;
