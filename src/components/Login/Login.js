import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

import './Login.css'

const Login = () => {
  const {signInUsingGoogle,handleEmailChange,handlePasswordChange,error,setError,signInWithEmail,email,password,saveUser2}=useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || '/dashboard';

  const handleLogin=e=>{
    e.preventDefault(); 
    signInWithEmail(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setError("")
      navigate( redirect_uri);
      console.log(user);
    })
    .catch((error) => {
      setError(error.message)
    });
  
  }

  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
     const user = result.user;
     saveUser2(user.email,user.displayName);
     navigate( redirect_uri);
     })
     
  }
  
  
  return (

  <div>
    <Navigation></Navigation>
      <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 login-from shadow-lg p-5 mx-auto ">
           <p className='text-danger fw-bold mt-5 fs-4 '>{error}</p>
        <h1 className='mb-5'>Please Login here</h1>
  {/* here login submit from */}
     <form onSubmit={handleLogin} >
          <div className="form-floating mb-3">
           <input  onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
              <label htmlFor="floatingInput">Email address</label>
                 </div>
                     <div className="form-floating">
                   <input onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                 <label htmlFor="floatingPassword">Password</label>
              </div>
              <p className='text-start mt-3'>Create a New Account ? |<Link to='/register'> Go to Register</Link> </p>
          <button  type="submit" className="btn btn-primary  text-light mt-4">Login</button>
          <hr />
     </form>

{/* here google login button */}
<button onClick={handleGoogleLogin}  className="btn btn-success my-3" >
    Sign in with <i className="fab fa-google text-light mx-2"></i></button>
        </div>
      </div>

      </div>
      <Footer></Footer>
  </div>
  );
};

export default Login;