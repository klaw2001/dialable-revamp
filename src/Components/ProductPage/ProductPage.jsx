import React from 'react'
import Navbar from '../Navbar'
import TopBar from '../TopBar'
import SubNav from '../SubNav'
import Offers from '../MarketPlace/Offers/Offers'
import ProductInfo from './ProductInfo/ProductInfo'
import Footer from '../Footer'

const ProductPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SubNav/>
        <Offers/>
        <ProductInfo/>
        <Footer/>
    </div>
  )
}

export default ProductPage