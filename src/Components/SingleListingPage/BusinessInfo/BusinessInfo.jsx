import React from 'react'
import BusinessContent from './BusinessContent/BusinessContent'
import Boxes from './Boxes/Boxes'

const BusinessInfo = () => {
  return (
    <div className='p-4 lg:px-10 lg:py-12 flex flex-col md:flex-row items-start justify-center gap-4 '>
        <div className='w-full md:w-[65%]'>

        <BusinessContent/>
        </div>
        <div className='w-full md:w-[33%]'>

        <Boxes/>
        </div>
    </div>
  )
}

export default BusinessInfo