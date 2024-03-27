import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Footer from '../Footer'
import BusinessHead from './BusinessHead/BusinessHead'
import BusinessInfo from './BusinessInfo/BusinessInfo'

const SingleListingPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SubNav/>
        <BusinessInfo/>
        
        <Footer/>
    </div>
  )
}

export default SingleListingPage