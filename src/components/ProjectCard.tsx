import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';

type ProjectCardProps = {
  imgSrc: string;
  title: string;
  desc: string;
  techStack: string;
  link: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ imgSrc, title, desc, techStack, link }) => {
  return (
    <Card className='project-card'>
      <Card.Img variant='top' className='project-card-img' src={imgSrc} alt={title} />
      <Card.Body>
        <Card.Title className='project-card-title'>{title}</Card.Title>
        <Card.Text className='project-card-text'>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='project-card-tech-stack'>{techStack}</small>
        <Button className='project-card-button' variant='icon' href={link} target='_blank' rel='noopener noreferrer'>
          <FaGithub size={24} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
