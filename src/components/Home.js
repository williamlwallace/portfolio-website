import { useState } from "react";
import "../scss/main.scss";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

const Home = props => {

  const { darkMode } = props;
  const [homeImage, setHomeImage] = useState("/images/profile.jpg");

  return (
    <div id="home" className="home-section">
      <Container>
        <motion.div
          animate={{ scale: [1.1, 1], y: [-20, 0] }}
          transition={{ duration: 2 }}
        >
          <Image
            src={homeImage}
            className="home-image"
            roundedCircle
            onMouseOver={setHomeImage("/images/profile.jpg" ? "/images/lift.jpg" : "/images/profile.jpg")}
          />
          <h1 className="home-title">
            Hi, my name is <span className="blue">William Wallace.</span>
          </h1>
          <h3 className="home-rotating-text">
            <ReactRotatingText
              items={[
                "Software Engineer.",
                "Full Stack Developer.",
                "Aspiring Power Lifter.",
              ]}
            />
          </h3>
          <div className="home-buttons">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                variant="icon"
                size="lg"
                href="mailto:williamwallace424@yahoo.co.nz"
              >
                <FaEnvelope size={32} color={darkMode.value ? "white" : "#212529"}></FaEnvelope>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                variant="icon"
                size="lg"
                href="https://www.github.com/williamlwallace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color={darkMode.value ? "white" : "#212529"}></FaGithub>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                variant="icon"
                size="lg"
                href="https://www.linkedin.com/in/william-wallace-289a3b1a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color={darkMode.value ? "white" : "#212529"}></FaLinkedin>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Home;
