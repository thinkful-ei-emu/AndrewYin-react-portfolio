import React from 'react';
import Project from './Project';
import './ProjectSection.css';

import projects from '../projects.json';

class Projects extends React.Component {

  render() {
    let projectList = projects.map(project =>
      <Project
        key={project.id}
        name={project.name}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
        imgUrl={project.imgUrl}
      />);

    return (
      <section id='projects' className='projectSection'>
        <h2 id='projectHeader' className='sectionHeader'>{'Projects'}</h2>
        <section className='projectShowcase'>
          {projectList}
        </section>
      </section>
    );
  }
}

export default Projects;