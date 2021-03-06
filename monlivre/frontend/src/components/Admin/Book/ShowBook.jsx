import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as FaIcons  from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal, Card } from 'react-bootstrap';
import Addbook from './CreateBook';
import Updatebook from './UpdateBook';
import Swal from 'sweetalert2'




function ShowBooks() {
  const baseURL = "http://localhost:5000/api/books";

  let [books, setbooks] = useState([])
  const [book, set_book] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){
    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
        setbooks(cli.data.books);
        
        
    }
    }

    console.log(books)
  const deleteData = (id, e) =>{   
     Swal.fire({
        title: 'are you sure?',
        showDenyButton: true,
        confirmButtonText: "Yes, i'm sure",
      denyButtonText: `No, don't save`,
      }
      ).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/api/books/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
          const newbooks = books.filter(book => book._id !== id)
          setbooks(newbooks)
         
            
      })
          Swal.fire('book Deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }

 useEffect( () => {
  getDAta()
  }, [Update, book]);

  const handleUpdate = (book) => {
    set_book(book)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  console.log(books)


const data = books.map((book, index) => {
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
      <Button size="sm"  variant="info" onClick={()=>handleUpdate(book)}>
            <GrIcons.GrUpdate size="10"  />
          </Button>
      <Button size="sm"  variant="danger" onClick={()=> deleteData(book._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button>
  </div>
</div>

    

          
 
  )
})


  return (
    <>
    <div className="container d-flex flex-column">

        <div className="float-right">
             <Button size="sm"  className='add-button' variant="primary" onClick={handleAdd}>
             <FaIcons.FaBook />
          </Button>
        </div>

     
  

          <div className="col-md-12 mt-5 d-flex justify-content-around">

    {data}
          </div>
    
  </div>
 


      <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add books</Modal.Title>
        </Modal.Header>

        <Addbook Close={handleClose}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Update book</Modal.Title>
        </Modal.Header>

        <Updatebook data={book}  Close={handleCloseU}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default ShowBooks