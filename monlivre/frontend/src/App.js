import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

// Dashboard import
import ContentDashboard from './pages/Dashboard/ContentDash';
import Nav_dash from './components/Nav_dash';


// Home import

import jwt_decode from "jwt-decode";

function App() {
          
  
  
  return (
    <div className="App">

   <BrowserRouter>

    <Switch>
      
      {/* <Route exact path="/" component={Home} /> */}

          <Route exact path="/dashboard" component={ContentDashboard} />
      
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      
          </Switch>

    </BrowserRouter>

    </div>
    
  );
}

export default App;
