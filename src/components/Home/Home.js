import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Home/Banner/Banner'
import Footer from '../Footer/Footer'
import Navigation from './Navigation/Navigation';
import About from '../About/About';

const Home = () => {
  const [products,setProducts] = useState(null);

  useEffect(()=>{
setTimeout(()=>{
  fetch('http://localhost:5000/products')
.then(res=> res.json())
.then(data=> setProducts(data.slice(0,6)))
},1500)
  },[])
  return (
    <div>
    <Navigation></Navigation>
    <Banner></Banner>
    <About></About>
    {/* here product section */}  
   <div className="container">
     <h1 className='my-5 fw-bold'>OUR <span className='text-danger'>PRODUCTS</span></h1>
   <div className="row row-cols-1 row-cols-md-3 g-4">
   {products && (
       products.map(product=>
        <div
        key={product._id}
         className="col">
        <div className="card shadow-lg ">
          <img src={product.img} className="card-img-top border-bottom  border-2" alt="..."/>
          <div className="card-body text-start p-4">
            <h4 className="card-title"><strong>{product.name}</strong></h4>
            <div className="d-flex justify-content-between my-3">
              <h5> Price : {product.price} Lakh</h5>
              <Rating className='rating text-warning'
          emptySymbol="far fa-star text-warning"
          fullSymbol="fas fa-star text-warning"
          readonly
          initialRating={product.ratings}
          > </Rating>
            </div>
            <p className="card-text">{product.description.slice(0,150)}</p>
            <Link to={`/details/${product._id}`}> 
       <button className="btn btn-danger">Buy Now</button></Link>
          </div>
        </div>
      </div>
    )
     )
      }
 
   </div>
{/* here add spinner */}
{!products && <div className='row'>
        <div className="col mt-5">
        <button className="btn btn-primary " type="button" >
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
          </div>
          </div>}

    </div>
 <AllReviews></AllReviews>
<Footer></Footer>
    </div>
  );
};

export default Home;