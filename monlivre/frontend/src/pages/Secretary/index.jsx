import React from 'react'
import Navbar from '../../components/Nav_dash'
import Secretary from '../../components/Secretary'
import '../Pages.css'



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
