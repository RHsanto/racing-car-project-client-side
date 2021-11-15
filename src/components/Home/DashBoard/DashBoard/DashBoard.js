import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Reviews from '../Reviews/Reviews'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import './DashBoard.css'
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import useAuth from '../../../../hooks/useAuth';
import AllOrders from '../AdminPannel/AllOrders/AllOrders';
import AddProduct from '../AdminPannel/AddProduct/AddProduct';
import MakeAdmin from '../AdminPannel/MakeAdmin/MakeAdmin';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';


const drawerWidth = 240;

function DashBoard(props) {
  let { path, url } = useRouteMatch();
  const {user,logOut,admin}= useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer p-2'>
     
           <span>
             <i class="fas fa-user-circle fs-1 text-primary admin"></i>
             <p className=''>{user?.email}</p>
           </span>
          <Divider />
          <div className="dash-nav my-3">

          
            {admin && 
            <> 
            <Link to='/'> <li> <i class="fas fa-house-user"></i> Home</li> </Link>
            <Link to={`${url}`}><li><i class="fas fa-clipboard"></i> Dashboard</li></Link>
            <Link to={`${url}/all-orders`}><li><i class="fas fa-clipboard"></i> Manage all Orders</li></Link>
            <Link to={`${url}/add-product`}><li><i class="fas fa-cart-plus"></i> Add product</li></Link>
            <Link to={`${url}/makeAdmin`}><li><i class="fas fa-user-plus"></i> Make Admin</li></Link>
            </>
            }
            {!admin && 
                <>
                 <Link to='/'> <li> <i class="fas fa-house-user"></i> Home</li> </Link>
                 <Link to={`${url}`}><li><i class="fas fa-clipboard"></i> Dashboard</li></Link>
                 <Link to={`${url}/my-orders`}><li><i class="fas fa-shopping-cart"></i> My orders</li></Link>
                 <Link to={`${url}/Payment`}> <li><i class="fab fa-amazon-pay"></i> Payment</li></Link>
                 <Link to={`${url}/reviews`}><li><i class="fas fa-star"></i> Reviews</li></Link> 
                 </>
            }
        
          </div>
         
          <Divider />
          
           <button onClick={logOut} className="btn btn-danger mt-3  w-100">
            <i className="fas fa-sign-out-alt text-light me-2"></i> logout</button>
         
         
    
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4"  noWrap component="div">
             User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
        <Switch>
        <Route exact path={path}>
          <DashBoardHome></DashBoardHome>
        </Route>
        <Route path={`${path}/payment`}>
        <Payment></Payment>
        </Route>
        <Route path={`${path}/reviews`}>
        <Reviews></Reviews>
        </Route>
        <Route path={`${path}/my-orders`}>
         <MyOrder></MyOrder>
        </Route>
        <AdminRoute path={`${path}/all-orders`}>
         <AllOrders></AllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/add-product`}>
         <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>
       
        
        
      </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
