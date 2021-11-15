import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import  './Navigation.css';

const Navigation = () => {
  const{user,logOut}=useAuth();
  return (
    <div className='container-fluid fixed-top nav-container '>
    <nav className="navbar navbar-expand-lg navbar-light  ">
      
   <div className="container-fluid ">
 <div className="col-lg-5  ">
 <NavLink to='/' className="navbar-brand logo text-light" href="/"> MOTORCYCLE</NavLink>
 </div>
  <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
  <div className="col-lg-10 ">
    
   <div className="navbar-nav d-flex justify-content-center align-items-center">
      <NavLink to ='/home'><li>Home</li> </NavLink>
      <NavLink to ='/products'><li >Products</li></NavLink>
     
 

{
     user.email ?
        <>  
   <div className="dropdown ">
       <button className="btn btn-dark  dropdown-toggle mx-2" type="button" id="dropdownMenuButton1"  data-bs-toggle="dropdown"          aria-expanded="false">
      <span className=' name text-light'>{user.displayName}</span>
      {user.emailVerified? <></>:
           
           <span className='user-name text-light'>{user.email} </span>}
      </button>
     <ul className="dropdown-menu mt-2 " aria-labelledby="dropdownMenuButton1">
     
       <Link to='/dashboard'><li className='text-dark items w-100 p-2 text-center'> Dashboard</li></Link>
       <hr />
      <button onClick={logOut} className="btn btn-danger my-2  w-100"><i className="fas fa-sign-out-alt text-light me-2 "></i> logout</button>
     </ul>
  </div>
         
            </>
        :<>
        <Link to ='/login'>
         <button className='btn btn-primary ms-2 w-100'>Login 
         <i className="fas fa-sign-in-alt ms-2 text-light m-0"></i>
        </button>
       </Link>
         </>
        
     }
</div>
   </div>


   {/* collopes  */}
  </div>
  
{/* container  */}
</div>

</nav>
{/* main div  */}
  </div>
  );
};

export default Navigation;