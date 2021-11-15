import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
  return (
    <div>
   <div className="about ">
    <div className="container">
        <div className="row about-details">
          <div className="col-lg-6 about-img">
            <img src="https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80" alt="img" />
          </div>
          <div className="col-lg-6 fw-bold">
           <p className='text-danger'>MOTORCYCLE</p>
              <h1> You can find pure racing adrenaline rush and much more in my store</h1>
             <Link to='/products'> <button className='btn slider-btn m-0 fs-5 mt-3'> Explore product</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;