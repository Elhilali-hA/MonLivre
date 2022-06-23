import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as FaIcons  from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal, Card } from 'react-bootstrap';
import AddReserv from './CreateReser';
import UpdateReserv from './UpdateReser';
import Swal from 'sweetalert2'




function ShowReservations() {
  const baseURL = "http://localhost:5000/api/orders/reservation";

  let [Reservations, setReservations] = useState([])
  const [reservation, set_reservation] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){
    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
        setReservations(cli.reservations);
        
        
    }
    }

    console.log(Reservations)
  const deleteData = (id, e) =>{   
     Swal.fire({
        title: 'are you sure?',
        showDenyButton: true,
        confirmButtonText: "Yes, i'm sure",
      denyButtonText: `No, don't save`,
      }
      ).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/api/orders/reservation/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
          const newReservations = Reservations.filter(reservation => reservation._id !== id)
          setReservations(newReservations)
         
            
      })
          Swal.fire('reservation Deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }

 useEffect( () => {
  getDAta()
  }, [Update, reservation]);

  const handleUpdate = (reservation) => {
    set_reservation(reservation)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  console.log(Reservations)


const data = Reservations.map((reservation, index) => {

  return(
    
      <div className="card " key={index} style={{width: '18rem'}}>
  <div className="card-body bg bg-white">
    <h5 className="card-title">title : {reservation.bookId.title}</h5>
    <p className="card-text">{reservation.clientId.name}</p>
    <p className="card-text">{reservation.status}</p>
    <p className="card-text">{reservation.date_from}</p>
    <p className="card-text">{reservation.date_to}</p>

      <Button size="sm"  variant="info" onClick={()=>handleUpdate(reservation)}>
            <GrIcons.GrUpdate size="10"  />
          </Button>
      <Button size="sm"  variant="danger" onClick={()=> deleteData(reservation._id)}>
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
          <Modal.Title>Add Reservations</Modal.Title>
        </Modal.Header>

        <AddReserv Close={handleClose}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Update Reservation</Modal.Title>
        </Modal.Header>

        <UpdateReserv data={reservation}  Close={handleCloseU}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default ShowReservations