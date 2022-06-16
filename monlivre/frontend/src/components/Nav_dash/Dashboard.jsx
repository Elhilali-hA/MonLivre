import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineUserSwitch  } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';



export default function Navbar ()  {
  const [sidebar, setSidebar] = useState(false);
  const handleLogout = () => {

    localStorage.clear();
        window.location.href = '/';

  }

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
            <span className="input-group-text" ><i className="fas fa-search" /></span>
          <input  className="form-control w-75 text-white" placeholder="Search" type="text"  style={{backgroundColor: '#222'}}/>
          </div>
          
        </div>
      </div>
    </form>
    {/* User */}
    <ul className="navbar-nav align-items-center d-none d-md-flex">
      <li className="nav-item dropdown">
        <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="media align-items-center">
            <span className="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src="./assets/img/theme/team-4-800x800.jpg" />
            </span>
            <div className="media-body ml-2 d-none d-lg-block">
              <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
            </div>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
          <div className=" dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </div>
          <a href="./examples/profile.html" className="dropdown-item">
            <i className="ni ni-single-02" />
            <span>My profile</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#!" className="dropdown-item">
            <i className="ni ni-user-run" />
            <span>Logout</span>
          </a>
        </div>
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

