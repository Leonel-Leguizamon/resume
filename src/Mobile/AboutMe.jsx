import React, { useState } from 'react';
import StandardBtn from '../Components/StandardBtn';
import { Content, Icons } from '../assets';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import SkillContainer from '../Components/SkillContainer';
const AboutMe = () => {
  const [showSoftSk, setShowSoftSk] = useState(false)
  const [showTechSk, setShowTechSk] = useState(false)
  const [showInterests, setShowInterests] = useState(false)

  return (
    <div className="flex flex-col gap-2 py-4 px-5">
      <h2 className="font-bold">About Me <br /> <h4 className='font-light'>(summarized)</h4></h2>
      <StandardBtn onClick={()=>{setShowSoftSk(!showSoftSk)}} icon2={Icons.plusicon} text={'Soft skills'} />
      {/* this could be modularized */}
      {
      showSoftSk && 
      <div className='flex flex-wrap gap-2' >
        {
          Content.aboutMe.softSkills.map((item) => (
            <SkillContainer show={showSoftSk} skill={item}/>
          ))
        }
      </div> 
      }
      <StandardBtn onClick={()=>{setShowTechSk(!showTechSk)}} icon2={Icons.plusicon} text={'Technical skills'} />
      {showTechSk && <div className='flex flex-wrap gap-2' >
        {
          Content.aboutMe.techSkills.map((item) => (
            <SkillContainer show={showTechSk} skill={item}/>
          ))
        }
      </div> }
      <StandardBtn onClick={()=>{setShowInterests(!showInterests)}} icon2={Icons.plusicon} text={'My interests'} />
      {showInterests && <div className='flex flex-wrap gap-2' >
        {
          Content.aboutMe.interests.map((item) => (
            <SkillContainer show={showInterests} skill={item}/>
          ))
        }
      </div> }
    </div>
  );
};

export default AboutMe;


