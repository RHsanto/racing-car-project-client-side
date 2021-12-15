import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import Product from '../Product/Product'
import './Products.css'
import { CircleLoader } from "react-awesome-loaders"
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
        <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
             </div>
          </div>}
       </div>
       <Footer></Footer>
    </div>
  );
};

export default Products;