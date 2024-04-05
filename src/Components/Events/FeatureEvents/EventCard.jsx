import Image from 'next/image'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'

const EventCard = ({img, type, date, location, price, desc, width}) => {
  return (
    <div className={`event-card ${width}`}>
        <div className='w-full relative'>
            <Image src={img} alt={"img"} className='h-full w-full object-cover'/>
        </div>
        <div className="info bg-white p-3">
            <div className='flex items-center justify-between'>
                <div className='py-2 px-4 bg-[#781393] text-white montserrat text-[1vw]'>
                    <span>{type}</span>
                </div>
                <p className='text-black montserrat text-[1.2vw] font-semibold'>{price}</p>
            </div>
            <p className='montserrat font-semibold mt-4 text-black text-[1.2vw]'>{desc}</p>
            <div className='flex items-center montserrat gap-2 my-1'>
                <span className='text-[1.3vw] text-gray-400'><FiClock/></span>
                <span className='text-[1vw]'>{date}</span>
            </div>
            <div className='flex items-center montserrat gap-2 my-1'>
                <span className='text-[1.3vw] text-gray-400'><IoLocationSharp/></span>
                <span className='text-[1vw]'>{location}</span>
            </div>
        </div>  
    </div>
  )
}

export default EventCard