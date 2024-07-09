import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { projectsList } from '../assets/content'

const ProjectsMobile = () => {
  return (
    <section className='bg-black flex flex-col'>
      <Header title={'Projects'}/>
      <div className='flex flex-col pt-24 pb-4 px-5 gap-4'>
        {
          projectsList?.map((project)=>(
            <ProjectCard projectData={project}/>
          ))
        }
      </div>
    </section>
  )
}

export default ProjectsMobile
