import { FC } from 'react';
import ExperienceCard from './ExperienceCard';
import experience from '../data/experience.json';

const Experience: FC = () => {
  return (
    <div id='experience' className='section'>
      <h1 className='section-title'>Experience.</h1>
      {experience.map((exp) => (
        <ExperienceCard key={exp.company} date={exp.date} company={exp.company} role={exp.role} />
      ))}
    </div>
  );
};

export default Experience;
