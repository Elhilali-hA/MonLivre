import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons  from "react-icons/bi";

export const SidebarData = [
  {
    title: 'dashboard',
    path: '/secretary/dashboard',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Clients',
    path: '/secretary/dashboard/clients',
    cName: 'nav-text',
    icon:  <IoIcons.IoMdPeople />
  },

  {
    title: 'Books',
    path: '/secretary/dashboard/books',
    cName: 'nav-text',
    icon : <FaIcons.FaBed />
  },
  {
    title: 'Reservations',
    path: '/secretary/dashboard/reservation',
    cName: 'nav-text',
    icon : <FaIcons.FaBed />
  },
  {
    title: 'Profile',
    path: '/secretary/dashboard/profile',
    cName: 'nav-text',
    icon : <BiIcons.BiUserCircle/> 
  }
];