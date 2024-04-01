import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Footer from '../Footer'
import ContactForm from './ContactForm/ContactForm'
import Companies from './Companies/Companies'
import ContactInfo from './ContactInfo/ContactInfo'

const Contact = () => {
  return (
    <div>
  
        <ContactForm/>
        <Companies/>
        <ContactInfo/>

    </div>
  )
}

export default Contact