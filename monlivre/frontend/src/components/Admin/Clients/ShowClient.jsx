import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import CreateClient from './CreateClient';
import UpdateClient from './UpdateClient';




function Showclient() {

  const baseURL = "http://localhost:5000/api/clients";

  let [Clients, setClients] = useState([])
  const [client, set_client] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);
  const token = JSON.parse(localStorage.getItem('name'));


  
  async function getDAta(){

    let res = await axios.get(baseURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
      setClients(cli.clients);
    }
    }

  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:5000/api/clients/${id}`, { headers: {"Authorization" : `Bearer ${token}`} }).then(() => {
    
      alert("Post deleted!");
      setClients(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, client]);

  
  const handleUpdate = (client) => {
    set_client(client)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);


const data = Clients.map((Client, index) => {
  return(

    <tr key={index}>
      <td > <p>{Client._id}</p> </td>
      <td > <p>{Client.name}</p> </td>
      <td > <p>{Client.email}</p> </td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(Client)}>
            <GrIcons.GrUpdate size="10"  />
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(Client._id)}>
            <BsIcons.BsFillTrashFill size="10"  />
          </Button></td>
  
  </tr> 
  )
})



if (Clients.length === 0) {

     return (
       <>
       
       <h1>No client!</h1>
       <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
       <BiIcons.BiUserPlus size="20"  />
     </Button>

     <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>

        <CreateClient />

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
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>

        <CreateClient />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>update client</Modal.Title>
        </Modal.Header>

        <UpdateClient data={client} Close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default  Showclient
