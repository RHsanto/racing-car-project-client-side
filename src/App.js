import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Reviews from './components/Home/DashBoard/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashBoard from './components/Home/DashBoard/DashBoard/DashBoard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllReviews from './components/AllReviews/AllReviews';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
     
     <Switch>
       <Route exact path ='/'>
        <Home></Home>
       </Route>
       <Route  path ='/home'>
        <Home></Home>
       </Route>
       <PrivateRoute  path ='/products'>
       <Products></Products>
       </PrivateRoute>
       <PrivateRoute path='/details/:id' >
         <ProductDetails></ProductDetails>
       </PrivateRoute>
       <PrivateRoute path ='/dashboard'>
        <DashBoard></DashBoard>
       </PrivateRoute>
       <Route  path ='/reviews'>
        <Reviews></Reviews>
       </Route>
       <Route  path ='/all-reviews'>
        <AllReviews></AllReviews>
       </Route>

       <Route  path ='/login'>
         <Login></Login>
       </Route>
       <Route  path ='/register'>
       <Register></Register>
       </Route>
       <Route  path ='*'>
       <NotFound></NotFound>
       </Route>  
     </Switch>

     </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
