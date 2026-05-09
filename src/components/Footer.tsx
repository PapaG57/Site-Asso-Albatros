import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggleMap = () => setIsMapOpen(!isMapOpen);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3>ALBATROS</h3>
          <p>
            Promotion pour la recherche et la vulgarisation de l’aide sociale et humanitaire 
            dédiée aux personnes en situation de précarité ou d’exclusion sociale au Cameroun.
          </p>
        </div>
        <div className="footer-links">
          <h4>Liens Rapides</h4>
          <ul className="footer-links-list">
            <li><Link to="/a-propos">Qui sommes-nous ?</Link></li>
            <li><Link to="/missions">Nos Missions</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
            <li><Link to="/contact">Devenir Membre</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="footer-contact-items-wrapper">
            <div className="footer-contact-item">
              <a href="mailto:florentgerard@fgdeveloppement.com" className="footer-contact-link">
                <span className="footer-icon-container">
                  <span className="footer-email-at">@</span>
                </span>
                <span>florentgerard@fgdeveloppement.com</span>
              </a>
            </div>
            <div className="footer-contact-item">
              <button 
                onClick={toggleMap} 
                className="footer-contact-link footer-map-btn"
                title="cliquer pour ouvrir la carte"
              >
                <span className="footer-icon-container">
                  <img src={`${import.meta.env.BASE_URL}emplacement.png`} alt="Localisation" className="footer-icon" />
                </span>
                <span>Village de Songloulou, Cameroun</span>
              </button>
            </div>
            <div className="footer-contact-item">
              <Link to="/contact" className="footer-contact-link">
                <span className="footer-icon-container">
                  <svg className="footer-icon-envelope" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1c40f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6" stroke="#e67e22"></polyline>
                  </svg>
                </span>
                <span>Nous écrire</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modale Carte */}
      {isMapOpen && (
        <div className="modal-overlay" onClick={toggleMap}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleMap} aria-label="Fermer la carte">&times;</button>
            <div className="modal-header">
              <h3>Localisation de l'Association</h3>
              <p>Village de Songloulou, Région du Littoral, Cameroun</p>
            </div>
            <div className="modal-body">
              <iframe 
                title="Carte de l'Association"
                src="https://www.google.com/maps?q=4.137977,10.472217&z=15&t=k&output=embed" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} <img src={`${import.meta.env.BASE_URL}favicon-32x32.png`} alt="" className="footer-mini-icon" /> Association Albatros. Tous droits réservés.
            <span className="footer-credit"> - by 
              <a href="https://www.fgdeveloppement.com" target="_blank" rel="noopener noreferrer" className="credit-link">
                <img src={`${import.meta.env.BASE_URL}New_Logo_FG_DEV_no_background_blanc.png`} alt="Logo FG DEV" className="credit-logo" />
                FG Developpement
              </a>
            </span>

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
