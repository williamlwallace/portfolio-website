import { FC } from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  return (
    <motion.span
      style={{
        fontSize: 'inherit',
        fontWeight: 'bold',
        display: 'inline-block',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(90deg, #e70b81, #edff22, #65efad, #e70b81, #e70b81)',
        backgroundSize: '200% 100%',
        backgroundPosition: '0% 50%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        whiteSpace: 'nowrap',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '-200% 50%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
