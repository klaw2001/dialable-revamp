import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <aside className=" w-[20%]">
      <div className="profile flex items-start flex-col">
        <div className="profile-picture flex justify-start items-start gap-1 flex-col">
          <div className="img  bg-[#D9D9D9] h-[10vw] w-[10vw] rounded-full">
            {/* <Image src={"#"} height={40} width={40} alt="profile_picture" className="h-full w-full object-c0ver"/> */}
          </div>
          <button className="montserrat md:text-[1.2vw] lg:text-[0.75vw] self-start ml-2 lg:ml-6 font-medium">
            Upload picture
          </button>
        </div>
        <div className="mt-6">
          <h2 className="md:text-[2.2vw] lg:text-[1.5vw] montserrat font-semibold leading-none">
            Profile Name
          </h2>
          <p className="md:text-[1.2vw] lg:text-[0.8vw] montserrat font-semibold">
            abcd@gmail.com
          </p>
        </div>
        <div className="my-12 flex items-start flex-col gap-8">
          <button className="md:text-[2vw] lg:text-[1.06vw] text-[#FF6004] montserat font-semibold">
            Edit Profile
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Gift Cards
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Subscription
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Wishlist
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Order history
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Payments
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Registrations
          </button>
          <button className="md:text-[2vw] lg:text-[1.06vw] text-black montserat font-semibold">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
