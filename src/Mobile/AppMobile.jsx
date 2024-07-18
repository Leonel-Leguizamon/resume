import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage'
import ProjectsMobile from './ProjectsMobile'
import ProjectPageMobile from './ProjectPageMobile';
import WorkExpPage from './WorkExpPage';
const AppMobile = () => {
  return (
    <Routes>
      <Route path="/resume" element={<LandingPage />}/>
      <Route path="/resume/projects" element={<ProjectsMobile />}/>
      <Route path="/resume/work" element={<WorkExpPage />}/>
      <Route path="/resume/projects/:projectName" element={<ProjectPageMobile />}/>
    </Routes>
  );
}

export default AppMobile
