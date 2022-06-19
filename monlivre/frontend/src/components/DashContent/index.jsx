import React , { useState, useEffect} from 'react'
import './styles.modules.css'
import Store from '../../Store'
import {Card} from 'react-bootstrap'
import axios from "axios";

const Main = () => {
  const token = JSON.parse(localStorage.getItem('name'));

  async function getClients(){

    let res = await axios.get(clientURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let client = await res.data
    if(client){
      setclients(client.clients);

    }
}

useEffect( () => {
  getClients()
},[])

let [clients, setclients] = useState([])

const clientURL = "http://localhost:5000/api/clients";


  const description = [
    {title: 'clients', link: 'go to clients', url: 'clients', color: 'card bg-c-green order-card',icon: <i className="fa fa-thin fa-users f-left"></i>, count: <Store value="clients"  />,lastone: <Store last="client" value="null"  /> },
     {title: 'secretary', link: 'go to secretary', url: 'secretary', color: 'card bg-c-yellow order-card',icon: <i class="fa fa-thin fa-user-vneck-hair-long"></i>, count: <Store value="secretary"  />,lastone: <Store last="secretary" value="null"  /> }, 
    //  {title: 'Commandes', link: 'go to Commandes', url: 'commandes', icon:<MdIcons.MdFastfood color="black" size="30"/>, count: <Store value="commands"  />,lastone: <Store last="commands" value="null"  />} , 
    ]

    
    const x = clients.map((items, i) => {
      return(
      
           
            <tr key={i}>
              <th scope="row">
              <i className="fa fa-thin fa-users "></i>
              </th>
              <td>
               {items.name}
              </td>
              <td>
              {items.email}
              </td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" />  {items.role}
              </td>
            </tr>
             
      )

    })

    const desc = description.map((item, i) => {

      return (
          <Card key={i}>
            
      <div className={item.color} >
        <div className="card-block">
          <h6 className="m-b-20"> {item.title} </h6>
          <h2 className="text-right"> {item.icon} <span> total : {item.count} </span></h2>
          <p className="m-b-0">Last register :<span className="f-right"> {item.lastone} </span></p>
        </div>
      </div>
    
     
   </Card>

         
  )
}
  )

  return (
     <>
  <div className="container">
  <div className="row mt-5">
    <div className="col-md-12 d-flex justify-content-around ">

   
    {desc}
   
    
  </div>
  </div>

</div>


<div className="mt-5 col-md-10 m-auto">
  <div className="mb-xl-0">
    <div className="card shadow">
      <div className="card-header border-0">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0">Page visits</h3>
          </div>
          <div className="col text-right">
            <a href="/dashboard/clients" className="btn btn-sm btn-primary">See all</a>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Page name</th>
              <th scope="col">Visitors</th>
              <th scope="col">Unique users</th>
              <th scope="col">Bounce rate</th>
            </tr>
          </thead>
          <tbody>
           
            
        {x}
           
           
            
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>


  





      
    </>
     )
     };

     export default Main 