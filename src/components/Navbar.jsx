import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import { socialData } from '../data/social-data';
import Footer from './Footer'; // Asegúrate de importar el componente Footer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={isOpen ? 'sidebar active' : 'sidebar'}>
        {isOpen && (
          <button
            className="close-menu-btn"
            onClick={toggleMenu}
            style={{
              position: 'fixed',
              top: 20,
              right: 20,
              zIndex: 5000,
              padding: '12px',          
              cursor: 'pointer',
              color: '#64ffda',
              fontSize: '2.5rem',
              border: 'none',
            }}
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>
        )}
        <div className="sidebar-container">
          <div className="sidebar-logo">
            <Link to="/">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {socialData.name}
              </motion.h1>
            </Link>
            <motion.h2>{socialData.occupation}</motion.h2>
          </div>
          
          <ul className="sidebar-menu">
            <motion.li 
              className="sidebar-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/" className={`sidebar-link ${isActive('/')}`} onClick={toggleMenu}>
                <span className="nav-line"></span>
                <span className="nav-text">Sobre mí</span>
              </Link>
            </motion.li>
            <motion.li 
              className="sidebar-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/experience" className={`sidebar-link ${isActive('/experience')}`} onClick={toggleMenu}>
                <span className="nav-line"></span>
                <span className="nav-text">Experiencia</span>
              </Link>
            </motion.li>
            <motion.li 
              className="sidebar-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/projects" className={`sidebar-link ${isActive('/projects')}`} onClick={toggleMenu}>
                <span className="nav-line"></span>
                <span className="nav-text">Proyectos</span>
              </Link>
            </motion.li>
          </ul>
          
          <div className="sidebar-social">
            <a href={socialData.socialMedia.github} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href={socialData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        {/* Footer global dentro del menú */}
        {isOpen && (
          <div style={{ width: '100%' }}>
            <Footer />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;