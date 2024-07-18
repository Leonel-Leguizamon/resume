import React from 'react'
import Header from '../Components/Header'
import { Icons } from '../assets'

const LandingPageDesktop = () => {
  return (
    <section className="flex flex-col h-dvh bg-black w-full">
      <Header title={"Home"}/>
      <img src={Icons.settings} className='self-center mt-28 h-10 animate-spin w-fit'/>
      <h3 className='font-light text-center my-3'>Hello! I'm still working on the desktop version. <br/> <b>But you can now visit the mobile version!</b></h3>
      <div className='self-center p-5 bg-gray/15 rounded-xl w-fit flex flex-col'>
        <h4 className='font-semibold '>Why have two separates version instead one responsive?</h4>
        <h4 className='font-light mt-2'>I aim to generate the best UX and UI in each platform, so it seemed right to do it this way. </h4>
      </div>
    </section>
  )
}

export default LandingPageDesktop
