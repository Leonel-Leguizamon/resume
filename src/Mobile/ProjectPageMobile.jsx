import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header';
import { Icons } from '../assets';
import { downloadFiles } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';
import SplitText from '../Components/SplitText';

const ProjectPageMobile = () => {
    const locationParam = useLocation();
    const projectData = locationParam.state || {}
    const projectVariants = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    };
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <AnimatePresence>
        <section className='bg-black flex flex-col'>
            <Header title={projectData.title}/>
            <div className='flex flex-col pt-24 pb-4 px-5 gap-5'>
                <img src={projectData.stackedImages}/>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-cream'>
                        <SplitText
                            initial={{ y: '100%' }}
                            animate="visible"
                            variants={{
                            visible: i => ({
                                y: 0,
                                transition: {
                                delay: i * 0.1
                                }
                            })
                            }}
                        >
                            {projectData.title}
                        </SplitText>
                    </h1>
                    <h2 className='font-light text-lightgray/50'>
                        <SplitText
                            initial={{ y: '100%' }}
                            animate="visible"
                            variants={{
                            visible: i => ({
                                y: 0,
                                transition: {
                                delay: i * 0.1
                                }
                            })
                            }}
                        >
                            {projectData.subtitle}
                        </SplitText>
                    </h2>
                </div>
                <motion.div 
                    key={"Overview"}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={projectVariants}
                    transition={{ duration: 0.5, delay: 0.01 }}
                    className='flex flex-col gap-2'
                >
                    <h3>Overview</h3>
                    <h4 className='font-light'>{projectData.overview}</h4>
                </motion.div>
                <motion.div
                    key={"Tasks"}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={projectVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex flex-col gap-2'
                >
                    <h3>My tasks in the project</h3>
                    <ul className="marker:text-cream list-disc pl-5 space-y-1">
                        {
                            projectData.mainRole?.map((task)=>(
                                <li>
                                    <h4 className='font-light'>
                                    {task}
                                    </h4>
                                </li>
                            ))
                        }
                    </ul>
                </motion.div>
                <div className='flex flex-col gap-2'>
                    <a className='secondary-btn' href={projectData.links.repo.link} target="_blank" rel="noopener noreferrer">
                        <h3 className='font-bold'>{projectData.links.repo.title}</h3>
                        <img src={Icons.rightarrow} />
                    </a>
                    {
                        projectData.links.docs.length > 0 ? 
                        <button onClick={()=>downloadFiles(projectData.links.docs)} className='secondary-btn'>
                            <h3>📄 Download the docs</h3>
                            <img src={Icons.downloadicon}/>
                        </button> : null
                    }
                    {
                        projectData.links.video != "" ? 
                        <a className='secondary-btn' href={projectData.links.video} target="_blank" rel="noopener noreferrer">
                            <h3 className='font-bold'>🎥 Watch a video</h3>
                            <img src={Icons.rightarrow} />
                        </a> : null
                    }
                </div>
            </div>
        </section>
        </AnimatePresence>
  )
}

export default ProjectPageMobile
