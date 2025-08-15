import { FaWhatsapp } from 'react-icons/fa';
import { socialData } from '../data/social-data';

const phone = socialData.contact.phone.replace(/\D/g, '');
const whatsappUrl = `https://wa.me/${phone}`;

const WhatsAppButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      zIndex: 9999,
      background: '#25D366',
      color: '#fff',
      borderRadius: '50%',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(2,12,27,0.2)',
      fontSize: '2rem',
      transition: 'background 0.2s',
      textDecoration: 'none',
    }}
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppButton;
