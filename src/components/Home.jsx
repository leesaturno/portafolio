import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Home.css';
import { socialData } from '../data/social-data';
const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="home-left">
          <motion.div
            className="home-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="name">Tu Nombre</h1>
            <h2 className="title">Desarrollador Web Full Stack</h2>
            
            <p className="bio">
              Construyo experiencias digitales accesibles y pixel-perfect para la web.
            </p>
            
            <div className="nav-links">
              <motion.a 
                href="#about" 
                className="nav-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="nav-number">01.</span> Sobre mí
              </motion.a>
              <motion.a 
                href="#experience" 
                className="nav-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="nav-number">02.</span> Experiencia
              </motion.a>
              <motion.a 
                href="#projects" 
                className="nav-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="nav-number">03.</span> Proyectos
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="home-right">
          <motion.div
            className="featured-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="project-card">
              <div className="project-content">
                <p className="project-overline">Proyecto Destacado</p>
                <h3 className="project-title">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Nombre del Proyecto
                    <FaExternalLinkAlt className="external-link-icon" />
                  </a>
                </h3>
                <div className="project-description">
                  <p>Una breve descripción del proyecto destacado. Esta aplicación web permite a los usuarios realizar acciones específicas y resolver problemas concretos.</p>
                </div>
                <ul className="project-tech-list">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
                <div className="project-links">
                  <a href="https://github.com/tuusuario/proyecto" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="social-links-vertical">
        <motion.a 
          href={socialData.socialMedia.github} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href={socialData.socialMedia.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
        </motion.a>
        <div className="social-line"></div>
      </div>
      
      <div className="email-link-vertical">
        <motion.a 
          href="mailto:{socialData.contact.email}" 
          whileHover={{ y: -5 }}
        >
          {socialData.contact.email}
        </motion.a>
        <div className="email-line"></div>
      </div>
    </section>
  );
};

export default Home;