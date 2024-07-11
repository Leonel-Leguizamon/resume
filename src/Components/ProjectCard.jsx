import React from 'react'
import { projectImages } from '../assets/imgs'
import { Icons } from '../assets'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({projectData}) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/resume/projects/${projectData.title}`, { state: projectData })
    }
    return (
    <div className='flex flex-col rounded-2xl overflow-clip hover:scale-[0.995] hover:cursor-pointer transition-all'>
        <img src={projectData.mainImage} className='object-cover'/>
        <div className='flex flex-col p-5 gap-6 bg-gray/15'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-bold'>{projectData.title}</h2>
                    <button onClick={handleNavigate} className='flex flex-row items-center gap-1 py-1 hover:opacity-50 transition-all'>
                        <h4 className='font-light text-gray'>Read more</h4>
                        <img src={Icons.rightarrow_gray} className='h-4'/>
                    </button>
                </div>
                <h4 className='font-light'>{projectData.subtitle}</h4>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                    {
                        projectData.techIcons.map((icon)=>(
                            <img src={icon} className='h-5'/>
                        ))
                    }
                </div>
                <div className='flex bg-gray/15 px-3 py-1 rounded-md'>
                    <h4 className='text-lightgray/75 font-light'>{projectData.doneAt}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
