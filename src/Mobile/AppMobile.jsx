import React from 'react'
import Header from '../Components/Header'
import HeroMobile from './HeroMobile'
import ExperienceMobile from './ExperienceMobile'
import AboutMe from './AboutMe'
import TechStack from './TechStack'
import FooterMobile from './FooterMobile'

const AppMobile = () => {
  return (
    <div className='flex flex-col h-full bg-black w-full'>
        <Header />
        <HeroMobile/>
        <ExperienceMobile/>
        <AboutMe/>
        <TechStack/>
        <FooterMobile/>
    </div>
  )
}

export default AppMobile
