import React from 'react'
import { Icons, Imgs, Documents } from '../assets'
import { downloadFiles } from '../utils'
import { links } from '../assets/content'
import { AnimatePresence } from 'framer-motion'
import SplitText from '../Components/SplitText'
const HeroMobile = () => {

    return (
    <div className='flex flex-col px-5 py-8 pt-20'>
        {/* Greeting */}
        <div className='flex flex-col items-start gap-3 py-4'>
        <AnimatePresence>
            <img src={Imgs.profilephoto} className='self-center shadow-2xl rounded-full shadow-cream/20 bg-none'/>
            <h2 className='font-bold'>
                <SplitText 
                    initial={{ y: '100%' }} animate="visible" variants={{
                    visible: i => ({
                        y: 0,
                        transition: { delay: i * 0.1 }
                    })}}>
                    Hi! 👋
                </SplitText>
            </h2>
            <h1 className='font-bold'>
                <SplitText 
                    initial={{ y: '100%' }} animate="visible" variants={{
                    visible: i => ({
                        y: 0,
                        transition: { delay: i * 0.1 }
                    })}}>
                    I'm Leonel Leguizamón
                </SplitText>
            </h1>
        </AnimatePresence>
        </div>
        {/* Titles */}
        <div className='flex flex-col gap-2 py-4'>
            <div className='flex flex-row justify-between items-center gap-2'>
                <h3 className='font-light w-full whitespace-nowrap'>Software Engineer</h3>
                <div className='flex flex-row bg-gray/15 p-3 gap-2 items-center justify-center rounded-xl w-full'>
                    <span role="img">🇦🇷</span>
                    <h4 className='font-bold  whitespace-nowrap'>UNICEN, Arg.</h4>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-2'>
                <h3 className='font-light w-full whitespace-nowrap'>Graphic Designer</h3>
                <div className='flex flex-row bg-gray/15 p-3 gap-2 items-center justify-center rounded-xl w-full'>
                    <img src={Icons.graduateicon}/>
                    <h4 className='font-bold whitespace-nowrap'>Self Taught</h4>
                </div>
            </div>
        </div>
        {/* CTA */}
        <div className='flex flex-col gap-2 py-4'>
            <a className='primary-btn' href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <h3 className='font-bold text-black w-full'>Get in touch</h3>
            </a>
            <button 
            onClick={()=>downloadFiles([Documents.CV_Leonel_Leguizamon])}
            className='secondary-btn'>
                <h3 className='font-light whitespace-nowrap'>Download CV</h3>
                <img src={Icons.downloadicon}/>
            </button>
            <button 
            onClick={()=>downloadFiles([Documents.avance_de_carrera])}
            className='secondary-btn'>
                <h3 className='font-light whitespace-nowrap'>Download Certificates</h3>
                <img src={Icons.downloadicon}/>
            </button>
        </div>
    </div>
  )
}

export default HeroMobile
