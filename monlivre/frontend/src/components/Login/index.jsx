
import React, { useState } from 'react';

import jwt_decode from "jwt-decode";

import { Link, } from 'react-router-dom';
import './styles.modules.css';
import  axios  from 'axios' ;
// import { useResolvedPath } from 'react-router';
const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password:"",
      
      });
     
      const [error, setError] = useState("") 


      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url ="http://localhost:5000/api/auth/login"; 
          const response = await axios.post(url, data);
          console.log(response.data.accessToken);
          const user = jwt_decode(response.data.accessToken);
          localStorage.setItem("name", JSON.stringify(response.data.accessToken))
          if(user.role==="client"){
            window.location = "/" 
        
          }if(user.role==="admin"){
            window.location = "/dashboard" 
         
          }
      
          } catch (error) {
          if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500 
          ){
            setError(error.response.data.message)

          }
        }
      }
  return (
    <div>
  <section className="section section-shaped section-lg" style={{backgroundColor: '#dce1e9'}}>
    <div className="shape shape-style-1 bg-gradient-default pb-4">
     
              <h1>Welcome !  <span className="text-primary">MonLivre</span> </h1>
   
    </div>
    <div className="container pt-lg-7">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-white pb-5">
              <h2 className="text-primary pt-2">Log in</h2>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
             
              <form role="form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83" /></span>
                    </div>
                    <input className="form-control"
                     onChange={handleChange}
                     value={data.email}
                     placeholder="Email" name="email" type="email" />
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                    </div>
                    <input className="form-control" onChange={handleChange}
                    value={data.password}
                     placeholder="Password" name="password" type="password" />
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                  <label className="custom-control-label" htmlFor=" customCheckLogin"><span>Remember me</span></label>
                </div>
                {error && <div className="error_msg"> (errror)</div>}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">Sign in</button>
                </div>
              </form>
          <div className="row mt-1">
            <div className="col-6">
              <a href="#" className="text-light"><small>Forgot password?</small></a>
            </div>
            <div className="col-6 text-right">
              <a href="/register" className="text-light"><small>Create new account</small></a>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <div className="container">

      <hr />
      <div className="row align-items-center justify-content-md-between">
        <div className="col-md-6">
          <div className="copyright">
            © 2022 <a href target="_blank">MonLivre</a>.
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav nav-footer justify-content-end">
            <li className="nav-item">
              <a href className="nav-link" target="_blank">About Us</a>
            </li>
            <li className="nav-item">
              <a href className="nav-link" target="_blank">License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

   
  )
}
export default Signup;
