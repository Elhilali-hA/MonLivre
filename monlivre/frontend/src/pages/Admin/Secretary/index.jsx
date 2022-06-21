import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import Secretary from '../../../components/Admin/Secretary'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Secretary />
      </div>
    </>
  )
}

export default index
