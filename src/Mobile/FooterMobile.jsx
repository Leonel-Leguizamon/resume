import React from 'react'
import { Icons } from '../assets'
import { links } from '../assets/content'

const FooterMobile = () => {
  return (
    <>
        <div className='flex flex-col py-6 px-5 justify-center '>
            <h2 className='font-bold text-center'>Thanks for your visit! <span role="img">🙌</span> </h2>
            <h3 className='font-light text-center'>If you are interested in my profile, don't hesitate to contact me</h3>
        </div>
        <div className='flex flex-row gap-3 pt-6 pb-24  w-full items-center justify-center '>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <img src={Icons.whatsapp}/>
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={Icons.linkedin}/>
            </a>
            <a href={links.github.main} target="_blank" rel="noopener noreferrer">
              <img src={Icons.technologies.github}/>
            </a>
        </div>
    </>
  )
}

export default FooterMobile
