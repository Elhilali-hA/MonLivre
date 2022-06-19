import React, {useState} from 'react'
import axios from 'axios'



function CreateBook() {

  const baseURL = 'http://localhost:5000/api/books'
  const [Add_books, set_addbooks] = useState({
    email: "",
    name:"",
    password:""
  })

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addbooks({ ...Add_books, [input.name]: input.value });
  };

  const token = JSON.parse(localStorage.getItem('name'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL,  Add_books, { headers: {"Authorization" : `Bearer ${token}`}});
      console.log(response.data);
    
  
      window.location = "/dashboard/books" 
      } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500 
      ){
        setError('name, email already in use')
      }
    }
  }


  return (
    <>
    <form className="p-2" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="inputEmail4">title</label>
      <input type="title"
            placeholder='title'
            name='title'
            onChange={handleChage}
            value={Add_books.title}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputdescription4">description</label>
      <textarea  type="description"
            placeholder="description"
            name="description"
            onChange={handleChage}
            value={set_addbooks.description}
            required className="form-control" id="inputdescription4" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputprice">Price</label>
    <input type="text"
            name="price"
            placeholder="price *"
            onChange={handleChage}
            value={set_addbooks.price}

             className="form-control"  />
  </div>
  <div className="form-group">
    <label htmlFor="inputprice">Type</label>
    <input type="text"
            name="type"
            placeholder="type *"
            onChange={handleChage}
            value={set_addbooks.type}
             className="form-control"  />
  </div>

  <div className="form-group">
    <label htmlFor="inputprice">Image</label>
    <input type="file"
            name="image"
            placeholder="image *"
            onChange={handleChage}
            value={set_addbooks.image}
             className="form-control"  />
  </div>
  
 
  {error && <div className="error_msg"> {error} </div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default CreateBook
