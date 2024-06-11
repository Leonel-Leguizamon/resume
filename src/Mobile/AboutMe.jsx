import React from 'react'
import StandardBtn from '../Components/StandardBtn'
import { Icons } from '../assets'
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-2 py-4 px-5">
        <h2 className="font-bold">About Me <br/> <h4 className='font-light'>(summarized)</h4></h2>
        <StandardBtn onClick={()=>{}} icon2={Icons.plusicon} text={'Soft skills'}/>
        <StandardBtn onClick={()=>{}} icon2={Icons.plusicon} text={'Technical skills'}/>
        <StandardBtn onClick={()=>{}} icon2={Icons.plusicon} text={'My interests'}/>
  </div>
  )
}

export default AboutMe
