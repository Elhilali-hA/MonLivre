import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import Clients from '../../../components/Admin/Clients'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Clients />
      </div>
    </>
  )
}

export default index
