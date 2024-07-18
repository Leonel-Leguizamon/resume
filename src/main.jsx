import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { isMobile } from 'react-device-detect';
import AppMobile from './Mobile/AppMobile.jsx';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppDesktop from './Desktop/AppDesktop.jsx';

function AppRouter (){
  return (
  <BrowserRouter>
    {
      isMobile ? <AppMobile/> : <AppDesktop/>
    }
  </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
