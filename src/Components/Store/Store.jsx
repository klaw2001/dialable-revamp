import React from 'react'
import HeroSlider from './Hero/HeroSlider'
import Offers from '../MarketPlace/Offers/Offers'
import FeaturedCategories from './FeaturedCategories/FeaturedCategories'
import Items from './Items/Items'
import Marquee from './Marquee/Marquee'
import HandMade from './HandMade/HandMade'
import NewsLetter from '../NewsLetter/NewsLetter'

const Store = () => {
  return (
    <div className='overflow-x-hidden'>
      <Offers/>
      <HeroSlider/>
      <FeaturedCategories/>
      <Items/>
      <Marquee/>
      <HandMade/>
      <NewsLetter
        className="gradient p-6 lg:px-20 lg:py-20 text-white my-10 md:m-10 lg:m-32 flex-col flex  justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Join our newsletter"
        color="text-white"
      />
    </div>
  )
}

export default Store