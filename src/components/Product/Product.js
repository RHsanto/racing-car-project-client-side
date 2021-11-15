import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


// user:motorcycle 
// password: vL2jzyYlI6ju8oNQ

const Product = (props) => {
  const{_id, name,img,description,price,ratings} = props.product
  return (
    <div>
    <div className="col">
      <div className="card shadow-lg ">
        <img src={img} className="card-img-top border-bottom  border-2" alt="..."/>
          <div className="card-body text-start p-4">
           <h4 className="card-title"><strong>{name}</strong></h4>
             <div className="d-flex justify-content-between my-3">
                <h5>Price : {price} lakh</h5>
                   <Rating className='rating text-warning'
                     emptySymbol="far fa-star text-warning"
                     fullSymbol="fas fa-star text-warning"
                     readonly
                     initialRating={ratings} > 
                     </Rating>
                     </div>
             <p className="card-text">{description.slice(0,150)}</p>
          <Link to={`/details/${_id}`}> 
        <button className="btn btn-danger">Buy Now</button></Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Product;