import React from 'react'
import LandingPageDesktop from './LandingPageDesktop'
import { Route, Routes } from 'react-router-dom'

const AppDesktop = () => {
  return (
    <Routes>
      <Route path="/resume" element={<LandingPageDesktop />}/>
    </Routes>
  )
}

export default AppDesktop
