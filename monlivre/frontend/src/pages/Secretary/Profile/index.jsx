import React from 'react'
import Navbar from '../../../components/Secretary/Nav_dash'
import Profile from '../../../components/Secretary/Profile'
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
