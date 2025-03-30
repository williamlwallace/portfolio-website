import { FC } from 'react';

type ExperienceCardProps = {
  date: string;
  company: string;
  role: string;
};

const ExperienceCard: FC<ExperienceCardProps> = ({date, company, role}) => {
  return (
    <div className='experience-card'>
      <div>
        <p className='experience-date'>{date}</p>
      </div>
      <div>
        <p className='experience-company'>{company}</p>
        <p className='experience-role'>{role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
