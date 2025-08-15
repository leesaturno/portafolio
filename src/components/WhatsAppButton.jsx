import { FaWhatsapp } from 'react-icons/fa';
import { socialData } from '../data/social-data';
import { useState } from 'react';

const phone = socialData.contact.phone.replace(/\D/g, '');

const WhatsAppButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const text = encodeURIComponent(`Hola, mi nombre es ${name}. ${message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setShowModal(false);
    setName('');
    setMessage('');
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
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
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp style={{ fontSize: '2rem', color: '#fff' }} />
      </button>
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(10,25,47,0.85)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#112240',
            padding: '32px 24px',
            borderRadius: '12px',
            boxShadow: '0 2px 16px rgba(2,12,27,0.3)',
            minWidth: '320px',
            maxWidth: '90vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            color: '#ccd6f6',
          }}>
            <h3 style={{margin:0, fontSize:'1.2rem'}}>Enviar mensaje por WhatsApp</h3>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #233554',
                fontSize: '1rem',
                marginBottom: '8px',
                background: '#0a192f',
                color: '#ccd6f6',
              }}
            />
            <textarea
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #233554',
                fontSize: '1rem',
                background: '#0a192f',
                color: '#ccd6f6',
                resize: 'none',
              }}
            />
            <div style={{display:'flex', gap:'12px', justifyContent:'flex-end'}}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'transparent',
                  color: '#64ffda',
                  border: '1px solid #64ffda',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >Cancelar</button>
              <button
                onClick={handleSend}
                disabled={!name || !message}
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '1rem',
                  cursor: (!name || !message) ? 'not-allowed' : 'pointer',
                  opacity: (!name || !message) ? 0.7 : 1,
                }}
              >Enviar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
