import React from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import SubNav from '../SubNav'
import Footer from '../Footer'
import ProfilePage from './ProfilePage/ProfilePage'

const Profile = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <SubNav/>
        <ProfilePage/>
        <Footer/>
    </div>
  )
}

export default Profile