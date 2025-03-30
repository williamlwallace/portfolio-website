import { FC } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

const Projects: FC = () => {
  return (
    <div id='projects' className='section'>
      <h1 className='section-title'>Past projects.</h1>
      <div className='project-card-deck'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            imgSrc={project.imgSrc}
            title={project.title}
            desc={project.desc}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>

      <h4 className='mt-5'>
        More on my{' '}
        <a className='a-blue' href='https://github.com/williamlwallace?tab=repositories' target='_blank' rel='noopener noreferrer'>
          GitHub.
        </a>
      </h4>
    </div>
  );
};

export default Projects;
