import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/home/homepage.jsx';
import BuyWatch from './pages/buyWatch/buyWatch.jsx';
import Magazine from './pages/magazine/magazine.jsx';
import Security from './pages/security/security.jsx';
import Faq from './pages/faq/faq.jsx';
import Watches from './pages/watches/watches.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Wishlist from './components/wishlist/wishlist.jsx';
import Register from './components/register/register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/buywatch',
        element: <BuyWatch />
      },
      {
        path: '/magazine',
        element: <Magazine />
      },
      {
        path: '/security',
        element: <Security />
      },
      {
        path: '/watches',
        element: <Watches />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
