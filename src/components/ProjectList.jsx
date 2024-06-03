import React from 'react';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <img key={project.img} src={project.img} alt={project.category} />
    ))}
  </div>
);

export default ProjectList;