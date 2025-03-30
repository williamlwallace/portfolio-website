import { FC } from 'react';
import { FaPython, FaJs, FaGit, FaReact, FaAws } from 'react-icons/fa';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Emoji from '../utilities/Emoji';
import { motion } from 'framer-motion';

const About: FC = () => {
  const icons = [
    { icon: <FaJs size={32} />, tooltip: 'JavaScript / Typescript' },
    { icon: <FaReact size={32} />, tooltip: 'React / React-Native' },
    { icon: <FaPython size={32} />, tooltip: 'Python' },
    { icon: <FaAws size={32} />, tooltip: 'AWS' },
    { icon: <FaGit size={32} />, tooltip: 'Git' },
  ];

  return (
    <div id='about' className='section'>
      <h1 className='section-title'>About me.</h1>
      <div className='about-card'>
        <p className='about-description'>
          I'm a Software Engineer (BSc Hons) from the University of Canterbury with a passion for full-stack development. I specialise in building fluid, reactive, and user-friendly applications while keeping my code clean, scalable, and efficient. I'm always up for a challenge and thrive in collaborative environments where I can learn, build, and problem-solve. When I'm not deep in code, you'll probably find me gaming with friends, or at the gym stacking plates and chasing PRs. <Emoji symbol='🏋️' label='gym' />
        </p>

        <h4 className='about-skills-title'>Key skills and tools</h4>
        <div className='about-skills'>
          {icons.map(({ icon, tooltip }, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>
                <div className='about-icon'>{icon}</div>
              </OverlayTrigger>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
