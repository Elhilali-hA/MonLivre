import React from 'react'
import Navbar from '../../../components/Secretary/Nav_dash'
import Clients from '../../../components/Secretary/Clients'
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
