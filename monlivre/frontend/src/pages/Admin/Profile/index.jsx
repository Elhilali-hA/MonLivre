import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import Profile from '../../../components/Admin/Profile'
import '../../Pages.css'



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
