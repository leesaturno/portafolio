import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tutraduces.com',
      description: 'Plataforma de traducciones automáticas mediante inteligencia artificial con validación humana para documentos legales.',
      image: '/tutraduces-preview.png',
      technologies: ['React', 'Laravel', 'MySQL', 'OpenAI API', 'Google Vision AI'],
      liveLink: 'https://tutraduces.com',
    },
    {
      id: 2,
    title: "Málaga Towers",
    description: "Una app mobile con React Native para realizar reservas de espacios y servicios en torres de apartamentos de lujo, e implementación de un back-office con React/Next, Api en Laravel para gestionar reservas y disponibilidad de servicios/espacios.",
    technologies: ["React Native", "React", "Next.js", 'Laravel', 'MySQL'],
    image: "malaga-towers.png", // Ajusta la ruta de la imagen si es necesario
  },
  {
      id: 2,
    title: "junoshop-app",
    description: "Una app mobile con React Native para practicar el desarrollo de aplicaciones móviles.",
    technologies: ["React Native", "Expo", "JavaScript", "figma"],
    image: "Home.png", // Ajusta la ruta de la imagen si es necesario
    codeLink: 'https://github.com/leesaturno/junoshop-app',
  },
  ];

  return (
    <section className="projects-container" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-description">
          Aquí hay una selección de algunos de mis trabajos recientes. Cada proyecto representa
          diferentes habilidades y tecnologías que he utilizado.  
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn"
                    >
                      Ver Proyecto
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn secondary"
                    >
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;