import { useState, useEffect} from 'react'
import axios from "axios";
import React from "react";

function UpdateClients({data,Close}) {  
  
  
  
  const [Clients, set_Clients] = useState(
    data
    
    );
  const [error, setError] = useState("") 

    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:5000/api/clients`
  
      const updateClient =(e)=>{
          e.preventDefault();
          axios.put(`${baseURL}/${Clients._id}`, Clients, { headers: {"Authorization" : `Bearer ${token}`} }).then((response) => {
              Close();
          });
     
         
      }
    
      const handelInput =(e)=>{
  
          set_Clients({...Clients, [e.target.name] : e.target.value})
          console.log(Clients)
      }


  return (

    <>
     <form className="p-2"  onSubmit={updateClient}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput} name='email'  className="form-control" value={Clients.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput} name='password'  className="form-control" value={Clients.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput} name='name'  className="form-control" value={Clients.name}  />
  </div>


  {error && <div className="error_msg"> (errror)</div>}
  

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default UpdateClients
