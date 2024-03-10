import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Banner from './Banner/Banner'
import OurStory from './OurStory/OurStory'
import OurGoals from './OurGoals/OurGoals'
import OurExperience from './OurExperience/OurExperience'
import CustomerStories from './CustomerStories/CustomerStories'

import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer'
import NewsLetter from '../NewsLetter/NewsLetter'

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
        <NewsLetter
        className="gradient p-6 lg:px-20 lg:py-16 text-white flex-col flex lg:flex-row justify-between items-center"
        formClass="mt-8 flex flex-col gap-3"
        heading="Join our newsletter"
        color="text-black"
      />
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default AboutUs