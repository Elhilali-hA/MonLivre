import { useState} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';

function UpdateReservation({data, Close}) {  
  
  
  
  const [reservation, set_reservation] = useState(
   data
 );

  const [error, setError] = useState("") 
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:5000/api/orders/reservation`
    
      const updateReservation =(e)=>{
          e.preventDefault();
          try{

            axios.put(`${baseURL}/${reservation._id}`, reservation, { headers: {"Authorization" :  `Bearer ${token}`, 'content-type': 'application/json'}  }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a reservation!',
                'success'
                )
                Close();
            });
          }catch (error) {
            if (error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500 
            ){
              setError(error.response.data.message)
      
            }
          }
         
      }
    
      const handelInput = ({ currentTarget: input })=>{
  
          set_reservation({ ...reservation, [input.name] : input.value})
          console.log(reservation)
      }


  return (

    <>
     <form className="p-2"  onSubmit={updateReservation}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="title">Book</label>
      <input type="text" onChange={handelInput} name="bookId"  className="form-control" value={reservation.bookId}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="description">description</label>
      <input type="text" onChange={handelInput} name="clientId"  className="form-control" value={reservation.clientId} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Image">date from</label>
    <input type="text" onChange={handelInput} name="date_from"  className="form-control" value={reservation.date_from}  />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="type">date to</label>
      <input type="text" onChange={handelInput} name="date_to"  className="form-control" value={reservation.date_to}  />
    </div>


  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default UpdateReservation