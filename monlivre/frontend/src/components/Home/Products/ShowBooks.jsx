import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as FaIcons  from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal, Card } from 'react-bootstrap';
import Swal from 'sweetalert2'




function ShowBooks() {
  const baseURL = "http://localhost:5000/api/books";

  let [books, setbooks] = useState([])
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){
    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
        setbooks(cli.data.books);
        
        
    }
    }


 
 useEffect( () => {
  getDAta()
  }, []);
  

  let data;


if (token) {


 data = books.map((book, index) => {

  let src = 'http://localhost:3000/images/' + book.image
  return(
    
      <div className="card" key={index} style={{width: '18rem'}}>
  <img className="card-img-top"  src={src} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">title : {book.title}</h5>
    <p className="card-text">{book.description}</p>
    <p className="card-text">{book.type}</p>
    <p className="card-text">{book.price}$</p>
   
        <a href="#" className="btn btn-primary">Reserve</a>

  </div>
</div>




 )
}) 

return data
}
else{
    data = books.map((book, index) => {

        let src = 'http://localhost:3000/public/images/' + book.image
        return(
          
            <div className="card" key={index} style={{width: '18rem'}}>
        <img className="card-img-top"  src={src} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">title : {book.title}</h5>
          <p className="card-text">{book.description}</p>
          <p className="card-text">{book.type}</p>
          <p className="card-text">{book.price}$</p>
         
              <a href="/login"  className="btn btn-primary">reserve</a>
      
        </div>
      </div>
      
      
      
      
       )
      }) 
      

}
      


  return (
    <>
    <div className="container d-flex flex-column">

        <div className="float-right">
             {/* <Button size="sm"  className='add-button' variant="primary" onClick={handleAdd}>
             <FaIcons.FaBook />
          </Button> */}
        </div>

     
  

          <div className="col-md-12 mt-5 d-flex justify-content-around">

    {data}
          </div>
    
  </div>
 


     

      
    </>
  )
}

export default ShowBooks