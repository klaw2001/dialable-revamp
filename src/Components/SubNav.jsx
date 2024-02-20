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
    {
      title: "Special Offers",
      href: "#",
    },
  ];
  return (
    <div className="p-4 flex items-center justify-between border border-b text-black">
      {subNavLinks.map((link, i) => (
        <div key={i}>
          <Link href={link.href} className="text-[1vw] font-medium montserrat">
            {link.title}
          </Link>
        </div>
      ))}
      <div>
        <Link
          href="#"
          className="text-[1vw] btn font-semibold p-3 block border-2 border-black montserrat"
        >
          Special Offers
        </Link>
      </div>
    </div>
  );
};

export default SubNav;
