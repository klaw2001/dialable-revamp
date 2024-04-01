import React from 'react'
import { Navigation } from 'swiper'
import Navbar from '../Navbar'
import TopBar from '../TopBar'
import Offers from '../MarketPlace/Offers/Offers'
import Footer from '../Footer'
import Cart from './Cart/Cart'
import SubNav from '../SubNav'

const CartPage = () => {
  return (
    <div>
       
        <Offers/>
        <Cart/>

    </div>
  )
}

export default CartPage