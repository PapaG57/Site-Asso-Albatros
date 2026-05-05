import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <div className="logo-brand">
              <img src="/Logo-Albatros.png" alt="Logo Albatros" className="logo-img" />
              <span className="logo-text">ALBATROS</span>
            </div>
            <div className="logo-stripe">
              <div className="stripe green"></div>
              <div className="stripe red"></div>
              <div className="stripe yellow"></div>
            </div>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Accueil</Link></li>
            <li><Link to="/a-propos" className="nav-link">À Propos</Link></li>
            <li><Link to="/missions" className="nav-link">Missions</Link></li>
            <li><Link to="/actualites" className="nav-link">Actualités</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/faire-un-don" className="nav-link nav-btn-don">Faire un don</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
