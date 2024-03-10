import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Register from './Register/Register'
import Steps from './Steps/Steps'
import Stories from './Stories/Stories'
import Connect from './Connect/Connect'
import FaqSection from './FaqSection/FaqSection'
import Footer from '../Footer'


const BusinessListing = () => {
  return (
    <div>
        <TopBar/>
      <Navbar/>
      <SubNav/>
      <Register/>
      <Steps/>
      <Stories/>
      <Connect/>
      <FaqSection/>
      <Footer/>
    </div>
  )
}

export default BusinessListing