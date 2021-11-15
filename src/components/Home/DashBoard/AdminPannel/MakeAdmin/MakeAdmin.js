import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email,setEmail]=useState("");
  const [success,setSuccess]=useState(false)
  const{token}=useAuth();
  const handleEmailAdd=e=>{
    setEmail(e.target.value);

  }
  const handleAdminSubmit = e =>{
    const user = {email};
  fetch('http://localhost:5000/users/admin',{
    method:'PUT',
    headers: {
      'authorization':`Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    if(data.modifiedCount){
      console.log(data);
      setEmail('')
      setSuccess(true)
    }
    console.log(data);
  })
  e.preventDefault();

  }
  return (
    <div className='shadow-lg'>
      <h1 className='bg-dark text-light py-3'> Make admin</h1>
      <div className="container">
     <div className="row">
       <div className="col-lg-6 mx-auto p-5">
       {success && <Alert severity="success">Made Admin successfully</Alert>
}
 <form onSubmit={handleAdminSubmit}>
      <div class="form-floating mt-3">
          <input type="email" onBlur={handleEmailAdd}  class="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
     </div>
    <button className='bg-success btn text-light w-100 my-3'        type="submit">
           Submit
       </button>
</form>

       </div>
     </div>
   </div>
    </div>
  );
};

export default MakeAdmin;