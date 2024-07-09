import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { isMobile } from 'react-device-detect';
import AppMobile from './Mobile/AppMobile.jsx';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function AppRouter (){
  return (
  <BrowserRouter>
    {
      true ? <AppMobile/> : null
    }
  </BrowserRouter>
  )
}

{/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App/>} />
          <Route path="/rent/:city?/:dateIn?/:dateOut?/:type?" element={<Rentpage />} />
          <Route path='/finalize' element={<FinalizeRental />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </BrowserRouter> */}

// Ensure the root is created only once
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
