import './App.css';
import { BrowserRouter as Router ,  Routes
,Route } from 'react-router-dom';
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
import MakeAdmin from './components/Home/DashBoard/AdminPannel/MakeAdmin/MakeAdmin';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import AddProduct from './components/Home/DashBoard/AdminPannel/AddProduct/AddProduct';
import AllOrders from './components/Home/DashBoard/AdminPannel/AllOrders/AllOrders';
import MyOrder from './components/Home/DashBoard/MyOrder/MyOrder';
import Payment from './components/Home/DashBoard/Payment/Payment';
import DashBoardHome from './components/Home/DashBoard/DashBoardHome/DashBoardHome';
import  {useEffect,useState} from 'react';
import { WifiLoader } from "react-awesome-loaders"
function App() {
  const [loading,setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])
  return (
    <div className="App">
      {
        loading ?<div className='loading' >
            <WifiLoader
        background={"transparent"}
        desktopSize={"150px"}
        mobileSize={"150px"}
        text={"Loading..."}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
      </div>

        :
        <AuthProvider>
        <Router>
          
          <Routes>
            <Route exact path ='/' element={<Home/>}>
            </Route>
            <Route  path ='/home' element={<Home/>}>
            </Route>
            <Route  path ='/products' 
            element={
                   <PrivateRoute>
                    <Products/>
                   </PrivateRoute>
            }>
            </Route>
            <Route path='/details/:id' 
            element={<PrivateRoute>
                    <ProductDetails/>
                    </PrivateRoute>}>
              
            </Route>
            <Route path ='/dashboard'
             element={<PrivateRoute>
                      <DashBoard/>
                      </PrivateRoute>}>
     
              <Route exact path='/dashboard' element={<DashBoardHome/>}>
               </Route>
               <Route path='/dashboard/payment' element={ <Payment/>}>
              
               </Route>
               <Route path='/dashboard/reviews' element={<Reviews/>}>
               
               </Route>
               <Route path='/dashboard/my-orders'element={ <MyOrder/>}>
               
               </Route>
               <Route path='/dashboard/all-orders' element={<AdminRoute>
                 <AllOrders/>
               </AdminRoute>}>
                
               </Route>
               <Route path='/dashboard/add-product' element={<AdminRoute>
                 <AddProduct/>
               </AdminRoute>}>
                
               </Route>
               <Route path='/dashboard/makeAdmin' element={<AdminRoute>
                 <MakeAdmin/>
               </AdminRoute>}>
                
               </Route>
            </Route>
            <Route  path ='/reviews' element={ <Reviews/>}>
           
            </Route>
            <Route  path ='/all-reviews' element={ <AllReviews/>}>
            
            </Route>
     
            <Route  path ='/login' element={<Login/>}> 
            </Route>
            <Route  path ='/register' element={<Register/>}>
            </Route>
            <Route  path ='*' element={ <NotFound/>}>
           
            </Route>  
          </  Routes>
          </Router>
        </AuthProvider>
      }
 
    </div>
  );
}

export default App;
