import { FC, JSX } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ReactRotatingText from 'react-rotating-text';
import AnimatedText from './AnimatedText';

const IconButton: FC<{ href: string; icon: JSX.Element }> = ({ href, icon }) => (
  <motion.div whileHover={{ scale: 1.2 }}>
    <Button variant='icon' href={href} target='_blank' rel='noopener noreferrer' className='icon-button'>
      {icon}
    </Button>
  </motion.div>
);

const Home: FC = () => {
  return (
    <section id='home' className='home-section'>
      <Container>
        <motion.div animate={{ scale: [1.1, 1], y: [-20, 0] }} transition={{ duration: 2 }}>
          <Image src='/public/images/profile.jpg' className='home-image' roundedCircle />

          <h1 className='home-title'>
            Hi, my name is <AnimatedText text='William Wallace.' />
          </h1>

          <h2 className='home-rotating-text'>
            <ReactRotatingText items={['Software Engineer.', 'Full Stack Developer.', 'Power Lifter.']} />
          </h2>

          <div className='home-buttons'>
            <IconButton href='mailto:williamwallace424@yahoo.co.nz' icon={<FaEnvelope size={32} />} />
            <IconButton href='https://www.github.com/williamlwallace' icon={<FaGithub size={32} />} />
            <IconButton href='https://www.linkedin.com/in/william-wallace-289a3b1a2/' icon={<FaLinkedin size={32} />} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
