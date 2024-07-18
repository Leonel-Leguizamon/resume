import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Icons } from '../assets'
import SplitText from './SplitText';
const WorkExpCard = ({data, key}) => {
    const [showData, setShowData] = useState(false)
    const variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      };
    return (
    <AnimatePresence>
        <motion.div 
        key={key}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.3, delay: 0.1 }}
        className='bg-gray/15 p-5 rounded-2xl border-[1px] border-gray flex flex-col gap-4'>
            <div className='flex flex-col'>
                <div onClick={()=>{setShowData(!showData)}} className='flex flex-row justify-between'>
                    <h2 className='font-bold'>
                        <SplitText
                            initial={{ y: '100%' }} animate="visible" variants={{
                            visible: i => ({
                                y: 0,
                                transition: { delay: i * 0.1 }
                            })}}>
                            {data.title}
                        </SplitText>
                    </h2>
                    <img src={Icons.downarrow} className={`${showData ? 'rotate-180' : 'rotate-0'} transition-all duration-500`}/>
                </div>
                <h4 className='text-gray font-medium'>{data.subtitle}</h4>
            </div>
            {
                showData ? 
                <motion.div 
                    className='gap-2'>
                    <h4 className='font-bold'>Overview</h4>
                    <h4 className='font-light'>{data.overview}</h4>
                    <ul className="marker:text-cream list-disc pl-5 space-y-1">
                            {
                                data.mainTasks?.map((task)=>(
                                    <li>
                                        <h4 className='font-light'>
                                        {task}
                                        </h4>
                                    </li>
                                ))
                            }
                        </ul>
                </motion.div> : null
            }
            {
                showData ?
                <motion.div 
                    key={2}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='gap-2'>
                    <h4 className='font-bold'>What i learned?</h4>
                    <h4 className='font-light'>{data.learned}</h4>
                </motion.div> : null
            }
        </motion.div>
    </AnimatePresence>
  )
}

export default WorkExpCard
