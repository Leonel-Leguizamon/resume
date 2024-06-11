import React from 'react'
import { Icons } from '../assets'

const Header = () => {
  return (
    <div className='flex flex-row fixed border-b-[1px] border-gray justify-between items-center w-full p-5 bg-gray/10 backdrop-blur-xl drop-shadow-lg'>
        <h3 className='font-bold'>Leonel Leguizamón</h3>
        <img src={Icons.menuicon}/>
    </div>
  )
}

export default Header
