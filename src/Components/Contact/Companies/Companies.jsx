import React from 'react'
import relume from "../../../../public/Images/relume.svg"
import webflow from "../../../../public/Images/webflow.svg"
import Image from 'next/image'
const Companies = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between px-4 py-6 lg:px-10 lg:py-16'>
        <div className='w-full md:w-[50%] lg:w-[30%]'>
            <h3 className='text-black text-[6vw] font-bold md:text-[2vw] lg:text-[1.5vw] md:w-[72%] lg:w-[70%]'>{`Trusted by the world's best companies `}</h3>
        </div>
        <div className='flex flex-row flex-wrap md:flex-nowrap items-start my-4 md:my-0 justify-between  md:justify-end gap-4 md:gap-8 lg:gap-12 w-full md:w-[70%]'>
            <div className='w-[40%] md:w-[12vw] lg:w-[8vw]'>
                <Image src={webflow} alt="webflow" className='object-cover h-full w-full'/>
            </div>
            <div className='w-[40%] md:w-[12vw] lg:w-[8vw]'>
                <Image src={relume} alt="relume" className='object-cover h-full w-full'/>
            </div>
            <div className='w-[40%] md:w-[12vw] lg:w-[8vw]'>
                <Image src={webflow} alt="webflow" className='object-cover h-full w-full'/>
            </div>
            <div className='w-[40%] md:w-[12vw] lg:w-[8vw]'>
                <Image src={relume} alt="relume" className='object-cover h-full w-full'/>
            </div>
            <div className='w-[40%] md:w-[12vw]  lg:w-[8vw]'>
                <Image src={webflow} alt="webflow" className='object-cover h-full w-full'/>
            </div>
        </div>
      
    </div>
  )
}

export default Companies