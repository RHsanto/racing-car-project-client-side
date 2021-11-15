import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
  const {user,admin,isLoading}=useAuth();

  if(isLoading){
    return <div className="text-center loading">
   <button className="btn btn-primary" type="button" >
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>

  </div>
  }

  return (
    <div>
    <Route
   {...rest}
   render={({ location }) =>
     user.email && admin ? (
       children
     ) : (
       <Redirect
         to={{
           pathname: "/",
           state: { from: location }
         }}
       />
     )
   }
 />
</div>
  );
};

export default AdminRoute;