import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
     <footer className=' text-light'>
      {/* start footer  section*/}
      <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 text-start">
          <h2 > MOTORCYCLE</h2>
          <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means</p>
          {/* here footer icon */}
          <div className="footer-icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
        <div className="col-lg-4 ">
            {/* here footer nav bar */}
           <div className="footer-nav  mt-4">
              <ul>
        <NavLink to ='/home'><li>Home</li> </NavLink>
        <NavLink to ='/'><li>About</li></NavLink>
        <NavLink to ='/products'><li >Products</li></NavLink>
        <NavLink to ='/'><li >Contact</li></NavLink>
             </ul>
           </div>
          
        </div>
        {/* search bar here */}
        <div className="col-lg-4 ">
            <h4 className=' fw-bold mb-4 me-5'>OUR LOCATIONS</h4>
            {/* <input className='p-2 fs-6' type="text" placeholder='Search' />
            <button className='border-0 arrow bg-warning'><i className="fas fa-arrow-right"></i></button> */}
            <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/footer-img-5-300x171.png" alt="" />
         </div>
      </div>
   </div>
      <div className="copyright  ">
         <p className='text-light '>Copyright © 2021 motorcycle.com</p>
          </div>
 </footer>
    </div>
  );
};

export default Footer;