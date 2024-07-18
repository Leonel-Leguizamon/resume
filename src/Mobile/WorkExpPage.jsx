import React from 'react'
import Header from '../Components/Header'
import { Content } from '../assets'
import WorkExpCard from '../Components/WorkExpCard'

const WorkExpPage = () => {
  return (
    <section className='bg-black flex flex-col h-dvh'>
        <Header title={'Work'}/>
        <div className='flex flex-col pt-24 pb-4 px-5 gap-4'>
            {
                Content.workExperience.map((item, index)=>(
                    <WorkExpCard data={item} key={index}/>
                ))
            }
        </div>
    </section>
  )
}

export default WorkExpPage
