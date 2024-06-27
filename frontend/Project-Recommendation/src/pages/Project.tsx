import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';

const Project: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const level = query.get('level');
    // Fetch projects based on the selected level
    setProjects([]);
  }, [location.search]);

  return (
    <div className="project">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
