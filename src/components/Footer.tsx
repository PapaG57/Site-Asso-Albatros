import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
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
          <ul>
            <li><Link to="/a-propos">Qui sommes-nous ?</Link></li>
            <li><Link to="/missions">Nos Missions</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
            <li><Link to="/contact">Devenir Membre</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: contact@albatros-asso.cm</p>
          <p>Localisation: Cameroun</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Association Albatros. Tous droits réservés.
            <span className="footer-credit"> - by <a href="https://www.fgdeveloppement.com" target="_blank" rel="noopener noreferrer">FG DEVELOPPEMENT</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
