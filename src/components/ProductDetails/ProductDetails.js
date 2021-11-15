import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation'
import './ProductDetails.css'
const ProductDetails = () => {
  const{user}=useAuth();
  const {id} = useParams();
  const [product,setProduct]=useState([]);

  useEffect(()=>{
   fetch(`https://aqueous-fjord-12941.herokuapp.com/products/${id}`)
   .then(res=> res.json())
   .then(data => setProduct(data))
  },[])

  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data => {

 // here order details
 data.email=user.email
 data.orderName=product.name
 data.img= product.img
 data.price=product.price
 data.status ="pending";

    console.log(data)
    axios.post('https://aqueous-fjord-12941.herokuapp.com/orders',data)
    .then(res =>{
      if(res.data.insertedId){
        alert('Order Successful');
        reset();
      }
    })
  };

  return (
    <>
      <Navigation></Navigation>
    <div className='product-details-section'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-6 d-flex justify-content-center align-items-center'>
      <img src={product.img} className="card-img-top  " alt="..."/>
      </div>
      <div className='col-lg-6 border text-start p-3'>
       <div className="product-info">
       <h1>Model : {product.name}</h1>
       <h3>Price : {product.price}</h3>
       <p>{product.description}</p>
       </div>

{/* here from section */}
    <div className="booking-from">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='email' defaultValue={user.email} {...register("email", { required: true})} />
      <select {...register("category")}>
        <option >Category</option>
        <option value="Double Disc">Double Disc</option>
        <option value="Single Disc">Single Disc</option>
       
      </select>
      <input type="number" placeholder='Phone' {...register("phone",{required: true})} />
      <input placeholder='Address' {...register("address", { required: true})} />
      <input type="submit"  className='bg-success btn text-light'/>
    </form>
    </div>
      </div>
      </div>
      </div>
     
      
     
    </div>

    </>
  );
};

export default ProductDetails;