import React from 'react'

interface ProjectCardProps {
    project:{
        id:number,
        name:string,
        description:string,
        level:string,
        image:string,
    }
}

const ProjectCard:React.FC <ProjectCardProps>= ({project}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={project.image} alt={project.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
        <p className="text-gray-700 text-base">Level: {project.level}</p>
      </div>
    </div>
  )
}

export default ProjectCard