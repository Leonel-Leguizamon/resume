import React from 'react'
import { Icons } from '../assets'

const FooterMobile = () => {
  return (
    <>
        <div className='flex flex-col py-6 px-5 justify-center '>
            <h2 className='font-bold text-center'>Thanks for your visit! <span role="img">🙌</span> </h2>
            <h3 className='font-light text-center'>If you are interested in my profile, don't hesitate to contact me</h3>
        </div>
        <div className='flex flex-row gap-3 pt-6 pb-24  w-full items-center justify-center '>
            <img src={Icons.whatsapp}/>
            <img src={Icons.linkedin}/>
            <img src={Icons.github}/>
        </div>
    </>
  )
}

export default FooterMobile
