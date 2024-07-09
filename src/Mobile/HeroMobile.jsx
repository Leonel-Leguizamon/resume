import React from 'react'
import { Icons, Imgs, Documents } from '../assets'
import { downloadFiles } from '../utils'
const HeroMobile = () => {

    return (
    <div className='flex flex-col px-5 py-8 pt-20'>
        {/* Greeting */}
        <div className='flex flex-col items-start gap-3 py-4'>
            <img src={Imgs.profilephoto} className='self-center shadow-2xl rounded-full shadow-cream/20 bg-none'/>
            <h2 className='font-bold'>
                Hi!
                <span role="img">👋</span>
            </h2>
            <h1 className='font-bold'>
                I'm Leonel Leguizamón
            </h1>
        </div>
        {/* Titles */}
        <div className='flex flex-col gap-2 py-4'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='font-light w-full whitespace-nowrap'>Software Engineer</h3>
                <div className='flex flex-row bg-gray/15 p-3 gap-2 items-center rounded-xl w-full'>
                    <span role="img">🇦🇷</span>
                    <h4 className='font-bold  whitespace-nowrap'>UNICEN, Argentina</h4>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <h3 className='font-light w-full whitespace-nowrap'>Graphic Designer</h3>
                <div className='flex flex-row bg-gray/15 p-3 gap-2 items-center rounded-xl w-full'>
                    <img src={Icons.graduateicon}/>
                    <h4 className='font-bold whitespace-nowrap'>Self Taught</h4>
                </div>
            </div>
        </div>
        {/* CTA */}
        <div className='flex flex-col gap-2 py-4'>
            <button className='primary-btn'>
                <h3 className='font-bold text-black w-full'>Get in touch</h3>
            </button>
            <button 
            onClick={()=>{downloadFiles([Documents.CV_Leonel_Leguizamon])}}
            className='secondary-btn'>
                <h3 className='font-light whitespace-nowrap'>Download CV</h3>
                <img src={Icons.downloadicon}/>
            </button>
            <button className='secondary-btn'>
                <h3 className='font-light whitespace-nowrap'>Download Certificates</h3>
                <img src={Icons.downloadicon}/>
            </button>
        </div>
    </div>
  )
}

export default HeroMobile
