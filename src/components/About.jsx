import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="title-number">01.</span> Sobre mí
        </motion.h2>

        <motion.div 
          className="about-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="about-text">
            <p className="intro-paragraph">
              Soy Lee Saturno, Ingeniero en Informática y Full Stack Developer con más de cuatro años de experiencia diseñando y desarrollando aplicaciones web que combinan robustez, escalabilidad y una experiencia de usuario intuitiva. Disfruto transformando ideas complejas en soluciones digitales concretas y funcionales.
            </p>

            <p className="experience-paragraph">
              Durante mi trayectoria en 10Code Software Design y como desarrollador freelance, he liderado proyectos integrales usando tecnologías como React, Vue, React Native y Laravel. He implementado integraciones con OpenAI y Google Vision para automatizar procesos de traducción, y he construido plataformas de reserva y comercio electrónico con arquitecturas basadas en MySQL, Node.js y APIs REST.
            </p>

            <p className="skills-paragraph">
              Me apasiona explorar nuevas herramientas y metodologías. Domino desde HTML5, CSS3 y JavaScript hasta bases de datos relacionales (MySQL, SQL Server, PostgreSQL) y entornos de servidor en Windows y Linux. Mi enfoque autodidacta me ha permitido adaptarme rápidamente a frameworks emergentes y optimizar ciclos de desarrollo bajo metodologías ágiles.
            </p>

            <p className="strengths-paragraph">
              Más allá del código, mi fortaleza radica en la comunicación efectiva y la gestión ordenada de tareas con herramientas como Asana y Trello. Soy proactivo, adaptable y disfruto colaborar en equipos multidisciplinarios para alcanzar objetivos ambiciosos con calidad y puntualidad.
            </p>

            <p className="closing-paragraph">
              En este portafolio encontrarás ejemplos detallados de mis proyectos más destacados, desde plataformas de servicios residenciales hasta soluciones de e-commerce. Si te interesa profundizar en alguna iniciativa o estás buscando un desarrollador comprometido con la innovación, ¡hablemos!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;