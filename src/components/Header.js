import { Link, useLocation } from 'react-router-dom';
import styles from '../components/Header.module.scss';
import logo from '../assets/logo.svg';

function Header() {
  const location = useLocation();

  // Fonction pour déterminer si le lien est actif
  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Link to="/my-app"> <img src={logo} alt="Kasa logo" className={styles.logo}/></Link>

      <nav>
        <Link
          className={`${styles.navLink} ${isActive('/my-app') ? styles.active : ''}`}
          to="/my-app"
        >
          Accueil
        </Link>
        <Link
          className={`${styles.navLink} ${isActive('/my-app/about') ? styles.active : ''}`}
          to="/my-app/about"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
