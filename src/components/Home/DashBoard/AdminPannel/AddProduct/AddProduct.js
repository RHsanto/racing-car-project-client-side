import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/products',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Order Successfully');
        reset();
      }
    })
  
};

  
  return (
    <div className='add-packages'>
   
   <div className='container shadow-lg '>
   <h2 className='mb-5 bg-dark text-light p-3 '>Add a New Product  !</h2>
    <form className='pb-5' onSubmit={handleSubmit(onSubmit)}>
   
    
      <input type='text' placeholder='enter img link' {...register("img", { required: true })} />

      <input type='text' placeholder='enter product name'  {...register("name", { required: true })} />

      <input type='number' placeholder='enter price'   {...register("price", { required: true })} />

      <input  type='number' placeholder='enter ratings'   {...register("rating", { required: true })} />
      <textarea className='w-50' placeholder='Write your comments.....' {...register("description")} />
       
      

      <input className='btn-success' type="submit" />
     
    </form>
        
  </div>
  </div>

    
  );
};

export default AddProduct;