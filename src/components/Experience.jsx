import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBuilding, FaCode } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: '10Code Software Design',
      period: 'Noviembre 2022 - Diciembre 2023',
      description: 'Desarrollador Full Stack en múltiples proyectos:',
      projects: [
        'TuTraduce.com: Desarrollo usando React, MySQL y Laravel, implementando OpenAI (GPT-3) y Google Vision AI para Traducines automáticas de documentos.',
        'Reservatum.com: Desarrollo con Vue, MySQL y Laravel, una plataforma de gestión de  reserva de propiedades vacacionales.',
        'Málaga Towers: Desarrollo de una app mobile con React Native para realizar reservas de espacios y servicios en torres de apartamentos de Lujo e implementando un back-office con React/Next para gestionar reservas y disponibilidad de dichos espacios y servicios.'
      ],
      technologies: ['React', 'React Native', 'Vue','Laravel', 'MySQL', 'Node.js', 'Next.js', 'Google Vision AI', 'OpenAI'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: 'Agosto 2019 - Noviembre 2022',
      description: 'Desarrollo de proyectos como freelance:',
      projects: [
        'Compra Fácil: Desarrollo usando React para Frontend, Node y Socket.io para Backend con chat en tiempo real.',
        'Colaboración en diversos proyectos de software usando HTML, CSS, JS, Node.js y React.',
        'Desarrollo de módulos personalizados para administración de pequeñas empresas.'
      ],
      technologies: ['React', 'Node.js', 'Socket.io', 'HTML', 'CSS', 'JavaScript'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="experience-container" id="experience">
      <div className="experience-content">
        <h2 className="section-title">Mi Experiencia</h2>
        <p className="section-description">
          Mi trayectoria profesional en el desarrollo web y las tecnologías con las que he trabajado
          a lo largo de mi carrera.
        </p>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              variants={itemVariants}
            >
              <div className="experience-header">
                <div className="experience-title-container">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">
                    <FaBuilding className="experience-icon" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt className="experience-icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <div className="experience-body">
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-description-list">
                  {exp.projects.map((project, index) => (
                    <li key={index} className="experience-description-item">{project}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  <FaCode className="experience-icon" />
                  <div className="technology-tags">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;