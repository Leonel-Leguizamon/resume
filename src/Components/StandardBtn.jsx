import React, { useState } from 'react'

const StandardBtn = ({icon1, icon2, text, onClick}) => {
  const [clicked, setClicked] = useState(false)

  function handleClick(){
      setClicked(!clicked)
      onClick()
  }
  return (
    <button onClick={handleClick} className={`section-container ${clicked ? 'bg-gray/20 shadow-2xl shadow-lightgray/10 transition-all' : ''} `}>
        <div className='flex flex-row gap-2 items-center'>
            {icon1 ? <img src={icon1} /> : null}
            <h3 className="font-bold">{text}</h3>
        </div>
        <img src={icon2} className={`${clicked ? 'rotate-180' : 'rotate-0'} transition-all duration-500`} />
    </button>
  )
}

export default StandardBtn
