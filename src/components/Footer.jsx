import { FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';
import { socialData } from '../data/social-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
      <div className="footer-bottom">
          <p>
            © {currentYear} {socialData.name}. Todos los derechos reservados. Hecho con <FaHeart className="heart-icon" /> en Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;