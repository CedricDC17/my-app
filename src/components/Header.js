import { Link } from 'react-router-dom';
import styles from '../components/Header.module.scss'
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
        <img src={logo} alt="Kasa logo"/>
      <nav>
        <Link className={styles.navLink} to="/">Accueil</Link>
        <Link className={styles.navLink} to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;