import React from 'react'
import EventsBanner from './EventsBanner/EventsBanner'
import Industries from './Industries/Industries'
import FeatureEvents from './FeatureEvents/FeatureEvents'
import CountryEvents from './CountryEvents/CountryEvents'
import PastEvents from './PastEvents/PastEvents'
import NewsLetter from '../NewsLetter/NewsLetter'

const Events = () => {
  return (
    <div>
      <EventsBanner/>
      <Industries/>
      <FeatureEvents/>
      <CountryEvents/>
      <PastEvents/>
      <NewsLetter
        className="gradient p-6 lg:px-20 lg:py-20 text-white my-10 md:m-10 lg:m-32 flex-col flex  justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Join our newsletter"
        color="text-white"
      />
    </div>
  )
}

export default Events