import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SkillContainer = ({show, skill}) => {
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
            className='flex gap-2 items-center flex-grow basis-36 section-container hover:bg-gray/20 border-0'>
              <h4 className='grow break-words'>{skill}</h4>
            </motion.div>
          )
        }
        </AnimatePresence>
      )
}

export default SkillContainer
