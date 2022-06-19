import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

// Dashboard import
import ContentDashboard from './pages/Dashboard/ContentDash';
import Secretary from './pages/Secretary'
import Admins from './pages/Admins'
import Book from './pages/Books'


import Clients from './pages/Clients';


// Home import

import jwt_decode from "jwt-decode";

function App() {
          
  
  
  return (
    <div className="App">

   <BrowserRouter>

    <Switch>
      
      {/* <Route exact path="/" component={Home} /> */}

          <Route exact path="/dashboard" component={ContentDashboard} />
          <Route path='/dashboard/clients' component={Clients} />
          <Route path='/dashboard/secretary' component={Secretary} />
          <Route path='/dashboard/admins' component={Admins} />
          <Route path='/dashboard/books' component={Book} />




      
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
      
          </Switch>

    </BrowserRouter>

    </div>
    
  );
}

export default App;
