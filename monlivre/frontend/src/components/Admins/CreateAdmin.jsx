import React, {useState} from 'react'
import axios from 'axios'



function CreateAdmin() {

  const baseURL = 'http://localhost:5000/api/admins'
  const [Add_admins, set_addadmins] = useState({
    email: "",
    name:"",
    password:""
  })

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addadmins({ ...Add_admins, [input.name]: input.value });
  };

  const token = JSON.parse(localStorage.getItem('name'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL,  Add_admins, { headers: {"Authorization" : `Bearer ${token}`}});
      console.log(response.data);
    
  
      window.location = "/dashboard/admins" 
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
      <label htmlFor="inputEmail4">Email</label>
      <input type="email"
            placeholder='Email'
            name='email'
            onChange={handleChage}
            value={Add_admins.email}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={set_addadmins.password}
            required className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="name"
            placeholder="Name"
            onChange={handleChage}
             className="form-control"  />
  </div>
  
 
  {error && <div className="error_msg"> {error} </div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default CreateAdmin
