import React from 'react'
import Navbar from '../../../components/Secretary/Nav_dash'
import Reservation from '../../../components/Secretary/Reservation'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Reservation />
      </div>
    </>
  )
}

export default index
