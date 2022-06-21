import React from 'react'
import Navbar from '../../../components/Admin/Nav_dash'
import Book from '../../../components/Admin/Book'
import '../../Pages.css'



const index = () => {
  return (
    <>
      <Navbar />

      <div className='clients'>
      <Book />
      </div>
    </>
  )
}

export default index
