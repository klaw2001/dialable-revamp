import Image from 'next/image'
import React from 'react'
import accessibility from "../Images/accessibility.svg"
import { FaAngleDown } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
const TopBar = () => {
  return (
    <div className='flex justify-between items-center pr-14 pl-20 py-4 montserrat'>
        <div className='flex items-center justify-center gap-2 text-xs cursor-pointer font-normal'>
            <div className='image-cont relative w-[2vw]'>
                <Image src={accessibility} alt='logo' objectFit='cover'  className='h-full w-full'/>
            </div>
            <span className='text-xs'>Accessibility Settings</span>
            <FaAngleDown  />
        </div>
        <div className='flex items-center justify-center font-medium gap-2 text-lg cursor-pointer'>
          <PiGlobe />
            <span className='text-xs'>English</span>
        </div>
    </div>
  )
}

export default TopBar