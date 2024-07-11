import React, { useEffect } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { projectsList } from '../assets/content'
import { AnimatePresence, motion } from 'framer-motion'
const ProjectsMobile = () => {
  const projectVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='bg-black flex flex-col'>
      <Header title={'Projects'}/>
      <AnimatePresence>
        <div className='flex flex-col pt-24 pb-4 px-5 gap-4'>
          {
            projectsList?.map((project, index)=>(
              <motion.div
                key={project.title + index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={projectVariants}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <ProjectCard projectData={project} />
              </motion.div>
            ))
          }
        </div>
      </AnimatePresence>
    </section>
  )
}

export default ProjectsMobile
