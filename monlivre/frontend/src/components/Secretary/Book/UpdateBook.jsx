import { useState} from 'react'
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';

function UpdateBook({data, Close}) {  
  
  
  
  const [books, set_books] = useState(
   data
    
    );

    const [error, setError] = useState("") 

    
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:5000/api/books`
    
      const updatebook =(e)=>{
          e.preventDefault();
          try{

            axios.put(`${baseURL}/${books._id}`, books, { headers: {"Authorization" :  `Bearer ${token}`, 'content-type': 'application/json'}  }).then((res) => {
                
              Swal.fire(
                'Done !',
                'You update a book!',
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
  
          set_books({ ...books, [input.name] : input.value})
          console.log(books)
      }


  return (

    <>
     <form className="p-2"  onSubmit={updatebook}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="title">title</label>
      <input type="text" onChange={handelInput} name="title"  className="form-control" value={books.title}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="description">description</label>
      <input type="text" onChange={handelInput} name="description"  className="form-control" value={books.description} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Image">Image</label>
    <input type="file" onChange={handelInput} name="image"  className="form-control" value={books.image}  />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="type">type</label>
      <input type="text" onChange={handelInput} name="type"  className="form-control" value={books.type}  />
    </div>


  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit"  className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default UpdateBook