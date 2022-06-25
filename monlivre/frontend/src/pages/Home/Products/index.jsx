import React from 'react'
import Navbar from '../../../components/Home/Nav_dash'
import Product from '../../../components/Home/Products'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
    <Product />
      </div>
    </>
  )
}

export default index
