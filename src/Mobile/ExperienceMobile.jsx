import React from 'react'
import { Icons } from '../assets'
import StandardBtn from '../Components/StandardBtn';

const ExperienceMobile = () => {
  return (
    <div className="flex flex-col gap-2 py-4 px-5">
      <h2 className="font-bold">Experience</h2>
      <StandardBtn onClick={()=>{}} icon2={Icons.rightarrow} text={'Work'}/>
      <StandardBtn onClick={()=>{}} icon2={Icons.rightarrow} text={'Projects'}/>
    </div>
  );
}

export default ExperienceMobile
