import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header';
import { Icons } from '../assets';
import { downloadFiles } from '../utils';
const ProjectPageMobile = () => {
    const locationParam = useLocation();
    const projectData = locationParam.state || {}
    return (
        <section className='bg-black flex flex-col'>
            <Header title={projectData.title}/>
            <div className='flex flex-col pt-24 pb-4 px-5 gap-5'>
                <img src={projectData.stackedImages}/>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-cream'>{projectData.title}</h1>
                    <h2 className='font-light text-lightgray/50'>{projectData.subtitle}</h2>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3>Overview</h3>
                    <h4 className='font-light'>{projectData.overview}</h4>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3>My tasks in the project</h3>
                    <ul className="marker:text-cream list-disc pl-5 space-y-1">
                        {
                            projectData.mainRole.map((task)=>(
                                <li>
                                    <h4 className='font-light'>
                                    {task}
                                    </h4>
                                </li>
                            ))
                        }
                    </ul>
                </div>
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
  )
}

export default ProjectPageMobile
