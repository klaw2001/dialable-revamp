import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className='px-10 py-16 bg-[#F4EBFF]'>
        <h1 className='text-center Sans text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-bold'>Features</h1>
        <div className='flex justify-center items-center my-10 gap-8 flex-wrap'>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
    </div>
  )
}

export default Features