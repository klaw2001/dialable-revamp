import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Offers from '../MarketPlace/Offers/Offers'
import Footer from '../Footer'
import Checkout from './Checkout/Checkout'

const CheckOutPage = () => {
  return (
    <div>

        <Offers/>
        <Checkout/>

    </div>
  )
}

export default CheckOutPage