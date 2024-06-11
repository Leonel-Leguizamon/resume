import React from 'react'

const StandardBtn = ({icon1, icon2, text, onClick}) => {
  return (
    <button onClick={onClick} className="section-container">
        <div className='flex flex-row gap-2 items-center'>
            {icon1 ? <img src={icon1} /> : null}
            <h3 className="font-bold">{text}</h3>
        </div>
        <img src={icon2} />
    </button>
  )
}

export default StandardBtn
