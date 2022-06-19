import React from 'react'
import Navbar from '../../components/Nav_dash'
import Admins from '../../components/Admins'
import '../Pages.css'



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
