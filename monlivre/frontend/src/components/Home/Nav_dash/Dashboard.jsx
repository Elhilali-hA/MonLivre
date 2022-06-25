import jwt_decode from "jwt-decode";
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineSearch  } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { IconContext } from 'react-icons';



export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(true);
 

  return (
    <>
    
      
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='col-12 d-flex justify-content-between navbar_dash'>
       <nav className="navbar navbar-top navbar-expand-md navbar-dark col-md-12" id="navbar-main">
     
  <div className="container col-md-8">
    
    <a className="h4 mb-0 mr-4 text-white d-none d-lg-inline-block" href="/">MonLivre</a>
    
    <form className="navbar-search navbar-search-dark form-inline d-none d-md-flex ml-lg-auto" style={{width: '250px'}}>
      <div className="form-group mb-0" >
        <div className="input-group input-group-alternative" >
          <div className="input-group-prepend" style={{width: '90%'}}>
            <span className="input-group-text bg-dark" ><AiOutlineSearch /></span>
          <input  className="form-control w-75 text-white" placeholder="Search" type="text"  style={{backgroundColor: '#222'}}/>
          </div>
          
        </div>
      </div>
    </form>
      <ul className="navbar-nav align-items-center d-none d-md-flex">
      <li className="nav-item dropdown">        

      </li>
    </ul>
  </div>
</nav>

        </div>
       
      </IconContext.Provider>
    </>
  )
}

