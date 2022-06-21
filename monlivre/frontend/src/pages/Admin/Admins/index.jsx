import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import Admins from '../../../components/Admin/Admins'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Admins />
      </div>
    </>
  )
}

export default index
