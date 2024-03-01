import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import React, { useContext, useEffect } from 'react';
import Layout from 'Components/Layout/Layout';
import Home from 'Components/Home/Home';
import Brands from 'Components/Brands/Brands';
import Cart from 'Components/Cart/Cart';
import Login from 'Components/Login/Login';
import Register from 'Components/Register/Register';
import Categories from 'Components/Categories/Categories';
import Products from 'Components/Products/Products';
import NotFound from 'Components/NotFound/NotFound';
import ProtectedRoutes from 'Components/ProtectedRoutes/ProtectedRoutes';
import ProtectedAuth from 'Components/ProtectedAuth/ProtectedAuth';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import Wishlist from 'Components/Wishlist/Wishlist';
import Checkout from 'Components/Checkout/Checkout';
import AllOrders from 'Components/AllOrders/AllOrders';
import Forgetpw from 'Components/Forgetpw/Forgetpw';
import VerifyCode from 'Components/VerifyCode/VerifyCode';
import Resetpw from 'Components/Resetpw/Resetpw';
import { TokenContext } from 'Context/Token';


let routers = createHashRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <ProtectedRoutes> <Home /></ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes><Products /></ProtectedRoutes> },
      { path: "brands", element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
      { path: "cart", element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
      { path: "categories", element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
      { path: "productdetails/:id", element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
      { path: "wishlist", element: <ProtectedRoutes><Wishlist /></ProtectedRoutes> },
      { path: "checkout", element: <ProtectedRoutes><Checkout /></ProtectedRoutes> },
      { path: "allorders", element: <ProtectedRoutes><AllOrders /></ProtectedRoutes> },
      { path: "login", element: <ProtectedAuth><Login /></ProtectedAuth> },
      { path: "register", element: <ProtectedAuth><Register /></ProtectedAuth> },
      { path: "forgetpw", element: <ProtectedAuth><Forgetpw /></ProtectedAuth> },
      { path: "verifycode", element: <ProtectedAuth><VerifyCode /></ProtectedAuth> },
      { path: "resetpw", element: <ProtectedAuth><Resetpw /></ProtectedAuth> },
      { path: "*", element: <NotFound /> },
    ]
  }
])
function App() {
  let {setToken} = useContext(TokenContext);
  useEffect (() => {
    if(localStorage.getItem('UserToken') !== null) {
      setToken(localStorage.getItem("UserToken"));
    }
  },[])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}
export default App;
