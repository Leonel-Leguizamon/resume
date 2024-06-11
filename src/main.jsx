import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { isMobile } from 'react-device-detect';
import AppMobile from './Mobile/AppMobile.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      isMobile ? 
        <AppMobile/> : null
    }
  </React.StrictMode>,
)
