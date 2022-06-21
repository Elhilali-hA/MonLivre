import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import ContentDash from '../../../components/Admin/DashContent'
import '../../Pages.css'



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
