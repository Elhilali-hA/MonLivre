import React from 'react'
import Navbar from '../../components/Nav_dash'
import Book from '../../components/Book'
import '../Pages.css'



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
