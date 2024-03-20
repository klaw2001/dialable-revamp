import Image from "next/image";
import React from "react";

const SideBar = ({setActiveTab, activeTab}) => {
  return (
    <aside className="w-full md:w-[20%]">
      <div className="profile flex items-center md:items-start flex-col">
        <div className="profile-picture flex justify-start items-center md:items-start gap-1 flex-col">
          <div className="img  bg-[#D9D9D9] h-[40vw] w-[40vw] md:h-[10vw] md:w-[10vw] rounded-full">
            {/* <Image src={"#"} height={40} width={40} alt="profile_picture" className="h-full w-full object-c0ver"/> */}
          </div>
          <button className="montserrat md:text-[1.2vw] lg:text-[0.75vw] self-start ml-2 lg:ml-6 font-medium">
            Upload picture
          </button>
        </div>
        <div className="mt-6">
          <h2 className="md:text-[2.2vw] text-center md:text-left lg:text-[1.5vw] montserrat font-semibold leading-none">
            Profile Name
          </h2>
          <p className="md:text-[1.2vw] lg:text-[0.8vw] montserrat font-semibold">
            abcd@gmail.com
          </p>
        </div>
        <div className="pt-12 pb-4 mb-10 border-b w-full md:border-b-0 border-[#00000075] md:p-0 md:my-12 flex flex-row items-start md:flex-col gap-8">
          <button onClick={()=>setActiveTab("edit-profile")} className={`text-[4.5vw] md:text-[2vw] lg:text-[1.06vw] ${activeTab==="edit-profile"?`text-[#FF6004]`:`text-balck`} montserat font-semibold`}>
            Edit Profile
          </button>
        
          <button onClick={()=>setActiveTab("order-history")} className={`text-[4.5vw] md:text-[2vw] lg:text-[1.06vw] ${activeTab==="order-history"?`text-[#FF6004]`:`text-balck`} montserat font-semibold`}>
            Order history
          </button>
         
          <button onClick={()=>setActiveTab("logout")} className={`text-[4.5vw] md:text-[2vw] lg:text-[1.06vw] ${activeTab==="logout"?`text-[#FF6004]`:`text-balck`} montserat font-semibold`}>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
