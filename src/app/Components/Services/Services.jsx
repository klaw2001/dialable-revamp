import React from 'react'
import services from './index.js'
import Image from 'next/image.js'
const Services = () => {
   
  return (
    <div className='bg-[#F0F3FA] p-10 lg:p-20'>

    <div className='flex items-center gap-4 lg:gap-6 justify-start w-full lg:w-[70%] flex-wrap  lg:mx-[17.5vw] montserrat'>
      {
        services.map((item,index)=>(
          <div key={index} className="service-box self-baseline flex items-center justify-center flex-col bg-white gap-4 w-[36vw] lg:w-[12vw] shadow-md  p-4">
            <div className='lg:w-[4vw] w-[8vw] relative'>
              <Image src={item.img} alt={`${item + "_" + index}`} objectFit='cover' className='h-full w-full'/>
            </div>
            <h3 className='text-center text-[2.5vw] lg:text-sm font-semibold lg:font-medium'>{item.title}</h3>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Services