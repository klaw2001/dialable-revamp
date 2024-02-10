import React from 'react'
import Portal from  "../Images/job-portal.png"
import Image from 'next/image'
const JobPortal = () => {
  return (
    <div className='p-10 lg:px-16 lg:py-20 mx-18 lg:flex gap-[10vw] items-center  border-t-2 montserrat'>
        <div className='flex items-start flex-col gap-6 w-full lg:w-1/2'>
          <h1 className='text-[8.5vw] lg:text-[2.5vw] montserrat text-[#781393] font-bold leading-[12vw] lg:leading-[3vw]'>Find the perfect job opportunity for everyone on our inclusive job portal.</h1>
          <p className='roboto font-medium text-[4.5vw] lg:text-[1vw]'>Our job portal makes it easy for all users to discover employment opportunities, ensuring equal access for everyone.</p>
          <button className='btn border-2 text-[#FF6004] font-medium text-[4.5vw] lg:text-[1vw] border-[#FF6004] px-6 py-3'>Explore</button>
        </div>
        <div className='img relative w-full lg:w-[50%] mt-10 lg:mt-0'>
            <Image src={Portal} alt='portal-img' objectFit='cover' placeholder='blur' className='h-full w-full'/>
        </div>
    </div>
  )
}

export default JobPortal