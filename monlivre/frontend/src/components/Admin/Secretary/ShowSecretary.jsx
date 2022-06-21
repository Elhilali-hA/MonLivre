import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import CreateSecretary from './CreateSecretary';
import UpdateSecretary from './UpdateSecreatry';




function ShowSecretary() {

  const baseURL = "http://localhost:5000/api/secretary";

  let [secretary, setsecretary] = useState([])
  const [Onesecretary, set_Onesecretary] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){

    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
      setsecretary(cli.secretary);
    }
    }

  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:5000/api/secretary/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
    
      alert("Post deleted!");
      setsecretary(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, Onesecretary]);

  
  const handleUpdate = (Onesecretary) => {
    set_Onesecretary(Onesecretary)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);


const data = secretary.map((secretary, index) => {
  return(

    <tr key={index}>
      <td > <p>{secretary._id}</p> </td>
      <td > <p>{secretary.name}</p> </td>
      <td > <p>{secretary.email}</p> </td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(secretary)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(secretary._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button></td>
  
  </tr> 
  )
})



if (secretary.length === 0) {

     return (
       <>
       
       <h1>No Secretary!</h1>
       <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
       <BiIcons.BiUserPlus size="20"  />
     </Button>

     <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>

        <CreateSecretary />

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
          <Modal.Title>Add Secretary</Modal.Title>
        </Modal.Header>

        <CreateSecretary />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>update secretary</Modal.Title>
        </Modal.Header>

        <UpdateSecretary data={Onesecretary} Close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default  ShowSecretary
