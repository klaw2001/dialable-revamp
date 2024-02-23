import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Banner from './Banner/Banner'
import OurStory from './OurStory/OurStory'
import OurGoals from './OurGoals/OurGoals'
import OurExperience from './OurExperience/OurExperience'
import CustomerStories from './CustomerStories/CustomerStories'
import OurNewsLetter from './OurNewsLetter/OurNewsLetter'
import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer'

const AboutUs = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SubNav/>
        <Banner/>
        <OurStory/>
        <OurGoals/>
        <OurExperience/>
        <CustomerStories/>
        <OurNewsLetter/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default AboutUs