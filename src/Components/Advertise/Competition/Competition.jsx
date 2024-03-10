import React from "react";

const Competition = () => {
  return (
    <div className="px-10 py-16">
      <h1 className="text-center Sans text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-bold">
        Get ahead of your Competition
      </h1>
      <div className="flex items-center my-6 justify-center gap-4">
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002; Enter Category"
              style={{ fontFamily: "Inter,FontAwesome" }}
              className="py-2 montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
        <div className="search montserrat">
          <form action="">
            <input
              type="text"
              placeholder="&#xF002; Enter City/area name"
              style={{ fontFamily: "Inter,FontAwesome" }}
              className="py-2 montserrat border border-[rgba(0,0,0,0.25)] px-4"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center ">
            <div className="p-3 border-2">
                <h1 className="text-[4vw] montserrat font-semibold md:text-[3.08vw] lg:text-[2.08vw]">
                Count of Leads
                </h1>
                <p className="text-[3.35vw] montserrat font-medium md:text-[2.35vw] lg:text-[1.35vw]">
                Leads Generated in Interior Designers
                </p>
            </div>
      </div>
    </div>
  );
};

export default Competition;
