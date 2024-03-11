import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Footer from '../Footer'
import BusinessBanner from './BusinessBanner/BusinessBanner'
import Listings from './Listings/Listings'

const BusinessPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SubNav/>
        <BusinessBanner/>
        <Listings/>
        <Footer/>

    </div>
  )
}

export default BusinessPage