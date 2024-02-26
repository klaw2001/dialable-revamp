import React from "react";

const Filters = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-[1.5vw] text-black font-semibold Inter">Filters</h1>
        <div className="py-8 border-black border-b">
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
              <li key={i} className="my-4 cursor-pointer font-medium">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
