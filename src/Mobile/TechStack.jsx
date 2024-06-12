import React, { useState } from 'react'
import StandardBtn from '../Components/StandardBtn'
import { Icons, Content } from '../assets'
import { AnimatePresence, motion } from 'framer-motion'
import SkillContainer from '../Components/SkillContainer'

const TechStack = () => {
  const [showLevels, setShowLevels] = useState(false)
  const [showDbs, setShowDbs] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const [showFrameworks, setShowFrameworks] = useState(false)
  const [showTools, setShowTools] = useState(false)
  return (
    <div className="flex flex-col gap-2 py-4 px-5">
        <h2 className="font-bold">Tech stack </h2>
        <StandardBtn onClick={()=>{setShowLevels(!showLevels)}} icon1={Icons.dots} icon2={Icons.downarrow} text={'Levels reference'}/>
        {
          showLevels && 
          <div className='flex flex-wrap gap-2' >
              {levelRefContainer(showLevels, Content.levelRef.beg)}
              {levelRefContainer(showLevels, Content.levelRef.interm)}
              {levelRefContainer(showLevels, Content.levelRef.adv)}
          </div> 
        }
        <StandardBtn onClick={()=>{setShowDbs(!showDbs)}} icon1={Icons.databases} icon2={Icons.downarrow} text={'Databases'}/>
        {
          showDbs && 
          <div className='flex flex-wrap gap-2' >
            {
              Content.techStack.dbs.map((item) => (
                techContainer(showDbs, item)
              ))
            }
          </div> 
        }
        <StandardBtn onClick={()=>{setShowLanguages(!showLanguages)}} icon1={Icons.code} icon2={Icons.downarrow} text={'Programming languages'}/>
        {
          showLanguages && 
          <div className='flex flex-wrap gap-2' >
            {
              Content.techStack.languages.map((item) => (
                techContainer(showLanguages, item)
              ))
            }
          </div> 
        }
        <StandardBtn onClick={()=>{setShowFrameworks(!showFrameworks)}} icon1={Icons.libraries} icon2={Icons.downarrow} text={'Libraries & Frameworks'}/>
        {
          showFrameworks && 
          <div className='flex flex-wrap gap-2' >
            {
              Content.techStack.frameworks.map((item) => (
                frameworkContainer(showFrameworks, item)
              ))
            }
          </div> 
        }

        <StandardBtn onClick={()=>{setShowTools(!showTools)}} icon1={Icons.tools} icon2={Icons.downarrow} text={'Tools'}/>
        {
          showTools && 
          <div className='flex flex-wrap gap-2' >
            {
              Content.techStack.tools.map((item) => (
                <SkillContainer show={showTools} skill={item}/>
              ))
            }
          </div> 
        }
    </div>
  )
}

export default TechStack


function techContainer(show, content) {
  const level = content.level.levelName
  const color = level == 'Beginner' ? 'g' : level == 'Intermediate' ? 'y' : 'r'
  return (
    <AnimatePresence>
    {
      show && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex flex-col gap-2 items-start flex-grow basis-40 section-container hover:bg-gray/20 border-0'>
          <img src={content.icon}/>
          <h3 className='font-bold'>{content.name}</h3>
          <h4 className='grow break-words font-light'>{content.learned}</h4>
          {levelContainer(color, level)}

        </motion.div>
      )
    }
    </AnimatePresence>
  )
}

function frameworkContainer(show, content) {
  const level = content.level.levelName
  const color = level == 'Beginner' ? 'g' : level == 'Intermediate' ? 'y' : 'r'
  return (
    <AnimatePresence>
    {
      show && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex flex-col gap-2 items-start flex-grow basis-40 section-container hover:bg-gray/20 border-0'>
          <h3 className='font-bold'>{content.name}</h3>
          <div className='flex flex-row w-full items-center justify-between'>
            <h4 className='font-light'>{content.learned}</h4>
            {levelContainer(color, level)}
          </div>

        </motion.div>
      )
    }
    </AnimatePresence>
  )
}

function levelRefContainer(show, content) {
  const level = content.levelName
  const color = level == 'Beginner' ? 'g' : level == 'Intermediate' ? 'y' : 'r'
  return (
    <AnimatePresence>
    {
      show && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex flex-col gap-2 items-start flex-grow basis-40 section-container hover:bg-gray/20 border-0'>
          {levelContainer(color, level)}
          <h4 className='font-light'>{content.ref}</h4>
        </motion.div>
      )
    }
    </AnimatePresence>
  )
}

function levelContainer(color, level) {
  return <div className={`
            px-3 py-1 ring-1 rounded-lg
            ${color == 'g' ? 'ring-green-500 bg-green-500/15 text-green-500' :
      color == 'y' ? 'ring-yellow-400 bg-yellow-400/15 text-yellow-400' :
        'ring-red-600 bg-red-600/10 text-red-600'}
            `}>

    <h4 className='grow text-current font-medium'>{level}</h4>
  </div>
}
