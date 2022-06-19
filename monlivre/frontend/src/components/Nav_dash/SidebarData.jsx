import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons  from "react-icons/bi";

export const SidebarData = [
  {
    title: 'dashboard',
    path: '/dashboard',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Clients',
    path: '/dashboard/clients',
    cName: 'nav-text',
    icon:  <IoIcons.IoMdPeople />
  },
  {
    title: 'Secretary',
    path: '/dashboard/secretary',
    cName: 'nav-text',
    icon : <FaIcons.FaUserTie />
    
    
  },
  {
    title: 'Admins',
    path: '/dashboard/admins',
    cName: 'nav-text',
    icon : <FaIcons.FaHotel />
  },
  {
    title: 'Books',
    path: '/dashboard/books',
    cName: 'nav-text',
    icon : <FaIcons.FaBed />
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    cName: 'nav-text',
    icon : <BiIcons.BiUserCircle/> 
  }
];