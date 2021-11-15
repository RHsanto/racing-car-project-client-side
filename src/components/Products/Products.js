import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
const [products,setProducts] = useState(null);

  useEffect(()=>{
setTimeout(()=>{
  fetch('https://peaceful-mountain-71593.herokuapp.com/saveproducts')
.then(res=> res.json())
.then(data=> setProducts(data))
},1500)
  },[])
  return (
<div >
<Navigation></Navigation>     
<div className="container my-5">
<h1 className=' fw-bold title'>OUR ALL<span className='text-danger'> PRODUCTS</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4">
 {products && (
   products.map(product=> <Product
    key={product._id}
    product={product}
    >
    </Product>)
 )}
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
       <Footer></Footer>
    </div>
  );
};

export default Products;