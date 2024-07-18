import React from 'react'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
  <div className='flex flex-row w-full fixed border-b-[1px] border-gray gap-5 justify-between items-center p-5 bg-gray/10 backdrop-blur-xl drop-shadow-lg z-10'>
      <div className='flex flex-row justify-start items-center gap-2'>
          <Link to={isMobile ? "/resume" : "/resume/"}>
            <h3 className='font-bold break-words'>Leonel Leguizamón</h3>
          </Link>
          <h4 className='px-3 py-1 whitespace-nowrap bg-lightgray/10 flex rounded-md font-light'>{title}</h4>
      </div>
  </div>

  )
}

export default Header
