import React from 'react'
import BusinessContent from './BusinessContent/BusinessContent'
import Boxes from './Boxes/Boxes'

const BusinessInfo = () => {
  return (
    <div className='p-4 lg:px-10 lg:py-12 flex items-start justify-center gap-4 '>
        <div className='w-[65%]'>

        <BusinessContent/>
        </div>
        <div className='w-[33%]'>

        <Boxes/>
        </div>
    </div>
  )
}

export default BusinessInfo