import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projectsData from '../data/projects.json';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;