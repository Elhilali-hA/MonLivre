import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import jwt_decode from 'jwt-decode'

// Dashboard import
import ContentDashboard from './pages/Admin/Dashboard/ContentDash';
import Secretary from './pages/Admin/Secretary'
import Admins from './pages/Admin/Admins'
import Book from './pages/Admin/Books'
import ProfileSecretary from './pages/Secretary/Profile'
import ProfileAdmin from './pages/Admin/Profile'

import SecretaryRoutes from './components/Secretary/ProtectedRouts.js';
import ProtoctedAdminRoutes from './components/Admin/ProtectedRouts.js';



import BookSecretary from './pages/Secretary/Books'
import Clientsecretary from './pages/Secretary/Clients';
import SecretaryDash from './pages/Secretary/Dashboard/ContentDash';
import Reservation from './pages/Secretary/Reservation'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home/Products'



import Clients from './pages/Admin/Clients';


// Home import
let user
const token = JSON.parse(localStorage.getItem('name')) 
if(token) {
  user = jwt_decode(token)
}
else {user = {}}



function App() {
          
  
  
  return (
    <div className="App">

   <BrowserRouter>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/404" component={PageNotFound}/>

      <Route exact path="/register" component={Signup} />
      <Route exact path="/login" component={Login} />


          <ProtoctedAdminRoutes exact path="/admin/dashboard" role={user.role} component={ContentDashboard} />
          <ProtoctedAdminRoutes path="/admin/dashboard/clients" role={user.role} component={Clients} />
          <ProtoctedAdminRoutes path="/admin/dashboard/secretary" role={user.role} component={Secretary} />
          <ProtoctedAdminRoutes path="/admin/dashboard/admins" role={user.role} component={Admins} />
          <ProtoctedAdminRoutes path="/admin/dashboard/books" role={user.role} component={Book} />
          <ProtoctedAdminRoutes path="/admin/dashboard/profile" role={user.role} component={ProfileAdmin} />
   

          <SecretaryRoutes exact path="/secretary/dashboard" role={user.role} component={SecretaryDash} />
          <SecretaryRoutes path="/secretary/dashboard/books" role={user.role} component={BookSecretary} />
          <SecretaryRoutes path="/secretary/dashboard/profile" role={user.role} component={ProfileSecretary} />
          <SecretaryRoutes path="/secretary/dashboard/clients" role={user.role} component={Clientsecretary} />
          <SecretaryRoutes path="/secretary/dashboard/reservation" role={user.role} component={Reservation} />




        
      
          </Switch>

    </BrowserRouter>

    </div>
    
  );
}

export default App;
