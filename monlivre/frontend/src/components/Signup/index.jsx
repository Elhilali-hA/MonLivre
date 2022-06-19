import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import  './styles.modules.css';
import  axios  from 'axios' ;
const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password:""
      });
      const history = useHistory(); 
      const [error, setError] = useState("") 


      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        try {
          const url ="http://localhost:5000/api/auth/register"; 
          const { data: res } = await axios.post(url, data );
          history.push("/login")
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
              <h1>Welcome ! <span className="text-primary">MonLivre</span> </h1>
    </div>
    <div className="container pt-lg-7">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-white pb-5">
              <h3 className="text-primary">Register</h3>
              <h6 className="text-secondary">create Your First Account !</h6>
            </div>
            <div className="card-body px-lg-5 py-lg-5" style={{backgroundColor: '#76a4ed'}}>

          <form role="form" onSubmit={handleSubmit}>
  <div className="form-group">
    <div className="input-group input-group-alternative mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text"><i className="ni ni-hat-3" /></span>
      </div>
      <input className="form-control"
      name='name'
      onChange={handleChange}
      value={data.name}
       placeholder="Name" type="text" />
    </div>
  </div>
  <div className="form-group">
    <div className="input-group input-group-alternative mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text"><i className="ni ni-email-83" /></span>
      </div>
      <input className="form-control" 
       name='email'
       onChange={handleChange}
       value={data.email}
      placeholder="Email" type="email" />
    </div>
  </div>
  <div className="form-group">
    <div className="input-group input-group-alternative">
      <div className="input-group-prepend">
        <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
      </div>
      <input className="form-control"
       name='password'
       onChange={handleChange}
       value={data.password}
       placeholder="Password" type="password" />
    </div>
  </div>
  <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
  <div className="row my-4">
    <div className="col-12">
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
        <label className="custom-control-label" htmlFor="customCheckRegister">
          <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
        </label>
      </div>
    </div>
  </div>
  {error && <div className="error_msg"> (errror)</div>}
  <div className="text-center">
    <button type="submit" className="btn btn-primary mt-4">Create account</button>
  </div>
</form>

            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <a href="#" className="text-white"><small>Forgot password?</small></a>
            </div>
            <div className="col-6 text-right">
              <a href="/login" className="text-white"><small>Log In</small></a>
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

    // <div className="signup_container" >
    //    <div className="signup_form_container">
    //      <div className="left">
    //        <h1>Welcome Back</h1>
    //        <Link to="/login" >
    //          <button type='button' className= "white_btn">
    //             Sign in
    //          </button>
    //        </Link>
    //      </div>
    //      <div className="right"></div>
    //      {/* onSubmit={handleSubmit} */}
    //      <form className="form_container" >
    //      <h1>Create Account</h1>
    //         <input
    //         type="text"
    //         placeholder='name'
    //         name='name'
    //         onChange={handleChage}
    //         value={data.lastName}
    //         required
    //         className="input"
    //         />
    //         <input
    //         type="email"
    //         placeholder='Email'
    //         name='email'
    //         onChange={handleChage}
    //         value={data.email}
    //         required
    //         className="input"
    //         />
    //         <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         onChange={handleChage}
    //         value={data.password}
    //         required
    //         className="input"
    //         />
    //       {error && <div className="error_msg"> (errror)</div>}

    //       <button type="submit" className="green_btn">
    //         Sign Up
    //       </button>
    //      </form>
    //    </div>
    // </div>
  )
}
export default Signup;
