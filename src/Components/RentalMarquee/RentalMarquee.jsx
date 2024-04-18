import React from 'react'
import Marquee from 'react-fast-marquee'
const RentalMarquee = () => {
  return (
    <div className='bg-[#420052] text-white py-4'>
        <Marquee direction='right' speed={80}>
            <div className='text-[3vw] font-semibold Sans'>Orthopedic &nbsp;&nbsp;&nbsp;&nbsp; <span className='font-thin'>/</span> &nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className='text-[3vw] font-semibold Sans'>Diagnostic supplies &nbsp;&nbsp;&nbsp;&nbsp; <span className='font-thin'>/</span>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className='text-[3vw] font-semibold Sans'>Homecare Furniture </div>
        </Marquee>
    </div>
  )
}

export default RentalMarquee