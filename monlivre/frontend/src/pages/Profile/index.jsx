import React from 'react'
import Navbar from '../../components/Nav_dash'
import Profile from '../../components/Profile'
import '../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Profile />
      </div>
    </>
  )
}

export default index
