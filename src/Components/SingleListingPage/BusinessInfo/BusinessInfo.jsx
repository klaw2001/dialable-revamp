import React from 'react'
import BusinessContent from './BusinessContent/BusinessContent'
import Boxes from './Boxes/Boxes'

const BusinessInfo = () => {
  return (
    <div className='px-10 py-12 flex items-center justify-center gap-4 '>
        <div className='w-[70%]'>

        <BusinessContent/>
        </div>
        <div className='w-[30%]'>

        <Boxes/>
        </div>
    </div>
  )
}

export default BusinessInfo