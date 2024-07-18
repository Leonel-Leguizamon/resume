import React from 'react'
import { Icons } from '../assets'
import StandardBtn from '../Components/StandardBtn';
import { useNavigate } from 'react-router-dom';

const ExperienceMobile = () => {
  const navigation = useNavigate()
  return (
    <div className="flex flex-col gap-2 py-4 px-5">
      <h2 className="font-bold">Experience</h2>
      <StandardBtn onClick={()=>{navigation("/resume/work")}} icon2={Icons.rightarrow} text={'Work'}/>
      <StandardBtn onClick={()=>{navigation("/resume/projects")}} icon2={Icons.rightarrow} text={'Projects'}/>
    </div>
  );
}

export default ExperienceMobile
