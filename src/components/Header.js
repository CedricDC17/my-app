import { Link, useLocation } from 'react-router-dom';
import styles from '../components/Header.module.scss';
import logo from '../assets/logo.svg';

function Header() {
  const location = useLocation();

  // Fonction pour déterminer si le lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Link to="/"> <img src={logo} alt="Kasa logo"/></Link>
      
      <nav>
        <Link 
          className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`} 
          to="/"
        >
          Accueil
        </Link>
        <Link 
          className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`} 
          to="/about"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
