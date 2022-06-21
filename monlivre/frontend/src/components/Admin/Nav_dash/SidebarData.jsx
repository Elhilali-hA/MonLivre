import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons  from "react-icons/bi";

export const SidebarData = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Clients',
    path: '/admin/dashboard/clients',
    cName: 'nav-text',
    icon:  <IoIcons.IoMdPeople />
  },
  {
    title: 'Secretary',
    path: '/admin/dashboard/secretary',
    cName: 'nav-text',
    icon : <FaIcons.FaUserTie />
    
    
  },
  {
    title: 'Admins',
    path: '/admin/dashboard/admins',
    cName: 'nav-text',
    icon : <FaIcons.FaHotel />
  },
  {
    title: 'Books',
    path: '/admin/dashboard/books',
    cName: 'nav-text',
    icon : <FaIcons.FaBed />
  },
  {
    title: 'Profile',
    path: '/admin/dashboard/profile',
    cName: 'nav-text',
    icon : <BiIcons.BiUserCircle/> 
  }
];