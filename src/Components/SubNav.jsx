import Link from "next/link";
import React from "react";

const SubNav = () => {
  const subNavLinks = [
    {
      title: "Homecare",
      href: "#",
    },
    {
      title: "Mobility Aids",
      href: "#",
    },
    {
      title: "Orthopedic Supports",
      href: "#",
    },
    {
      title: "Compression Garments",
      href: "#",
    },
    {
      title: "Respiratory Care",
      href: "#",
    },
    {
      title: "Active Daily Living - ADL",
      href: "#",
    },
    {
      title: "Used Products",
      href: "#",
    },
  ];
  return (
    <div className="py-3 md:px-4 lg:px-8 px-8 hidden bg-white md:flex items-center justify-between relative z-[98] border border-b text-black">
      {subNavLinks.map((link, i) => (
        <div key={i}>
          <Link href={link.href} className="md:text-[1.2vw] lg:text-[1.05vw] font-medium montserrat">
            {link.title}
          </Link>
        </div>
      ))}
      <div>
        <Link
          href="#"
          className="text-[1vw] btn shadow-xl font-semibold py-2 px-3 block border-2 border-black montserrat"
        >
          Special Offers
        </Link>
      </div>
    </div>
  );
};

export default SubNav;
