import React from 'react'
import Navbar from '../../components/Nav_dash'
import Clients from '../../components/Clients'
import '../Pages.css'



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
