import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div >
      <div className="banner-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h4-slider-img-2.jpg' className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <div className="slider-info">
          <h1>AGILITY AND <br /> PERFORMANCE</h1>
        <button className='slider-btn btn  fw-bold' >Shop Now</button>

        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h4-slider-img-1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="slider-info">
          <h1>HITTING THE <br /> APEX HEAD ON</h1>
        <button className='slider-btn btn fw-bold' >Shop Now</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h4-slider-img-3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="slider-info">
          <h1>SLICK NEW  <br /> CARBON BODY</h1>
        <button className='slider-btn btn fw-bold' >Shop Now</button>

        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span >Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span  >Next</span>
  </button>
</div>
      </div>
     
    </div>
  );
};

export default Banner;