import React from 'react'
import HeroSlider from './Hero/HeroSlider'
import Offers from '../MarketPlace/Offers/Offers'
import FeaturedCategories from './FeaturedCategories/FeaturedCategories'
import Items from './Items/Items'

const Store = () => {
  return (
    <div className='overflow-x-hidden'>
      <Offers/>
      <HeroSlider/>
      <FeaturedCategories/>
      <Items/>
    </div>
  )
}

export default Store