import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import CreateAdmin from './CreateAdmin';
import UpdateAdmin from './UpdateAdmin';




function ShowAdmin() {

  const baseURL = "http://localhost:5000/api/admins";

  let [admins, setadmins] = useState([])
  const [admin, set_admin] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){

    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
      setadmins(cli.admin);
    }
    }

  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:5000/api/admins/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
    
      alert("Post deleted!");
      setadmins(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, admin]);

  
  const handleUpdate = (admin) => {
    set_admin(admin)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);


const data = admins.map((admin, index) => {
  return(

    <tr key={index}>
      <td > <p>{admin._id}</p> </td>
      <td > <p>{admin.name}</p> </td>
      <td > <p>{admin.email}</p> </td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(admin)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(admin._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button></td>
  
  </tr> 
  )
})



if (admins.length === 0) {

     return (
       <>
       
       <h1>No Admin!</h1>
       <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
       <BiIcons.BiUserPlus size="20"  />
     </Button>

     <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>

        <CreateAdmin />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
       </>
     ) 
     
   }
   else
return (
  <>
    <table className="table table-striped">
  <thead>
    <tr>
    
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
      <th scope="col">
      <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
            <BiIcons.BiUserPlus size="20"  />
          </Button>
      </th>

    </tr>
  </thead>
  <tbody>
    
    {data}
   
     
  </tbody>
</table>

      <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>

        <CreateAdmin />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>update Admin</Modal.Title>
        </Modal.Header>

        <UpdateAdmin data={admin} Close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default  ShowAdmin
