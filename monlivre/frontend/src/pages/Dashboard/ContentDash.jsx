import React from 'react'
import Navbar from '../../components/Nav_dash'
import ContentDash from '../../components/DashContent'
import './Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className=''>
      <ContentDash />

      </div>
    </>
  )
}

export default index
