import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import './App.css'

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default App

