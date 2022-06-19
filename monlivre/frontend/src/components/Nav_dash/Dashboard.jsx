import jwt_decode from "jwt-decode";
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineSearch  } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { IconContext } from 'react-icons';



export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(true);
  const handleLogout = () => {

    localStorage.clear();
        window.location.href = '/';
  }

  const token = JSON.parse(localStorage.getItem('name'));
const user = jwt_decode(token)

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
      
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='col-12 d-flex justify-content-between navbar_dash'>
       <nav className="navbar navbar-top navbar-expand-md navbar-dark col-md-12" id="navbar-main">
       <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
  <div className="container col-md-8">
    
    <a className="h4 mb-0 mr-4 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Dashboard</a>
    
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
   
     <NavDropdown
              id="nav-dropdown-dark-example"
              title={user.name}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Welcome !</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
      </li>
    </ul>
  </div>
</nav>

        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='ul_dashboard nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

