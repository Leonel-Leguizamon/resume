import React from 'react'
import StandardBtn from '../Components/StandardBtn'
import { Icons } from '../assets'

const TechStack = () => {
  return (
    <div className="flex flex-col gap-2 py-4 px-5">
        <h2 className="font-bold">Tech stack </h2>
        <StandardBtn onClick={()=>{}} icon1={Icons.dots} icon2={Icons.downarrow} text={'Levels reference'}/>
        <StandardBtn onClick={()=>{}} icon1={Icons.databases} icon2={Icons.downarrow} text={'Databases'}/>
        <StandardBtn onClick={()=>{}} icon1={Icons.code} icon2={Icons.downarrow} text={'Programming languages'}/>
        <StandardBtn onClick={()=>{}} icon1={Icons.libraries} icon2={Icons.downarrow} text={'Libraries & Frameworks'}/>
        <StandardBtn onClick={()=>{}} icon1={Icons.tools} icon2={Icons.downarrow} text={'Tools'}/>
    </div>
  )
}

export default TechStack
