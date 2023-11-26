import { Link } from 'react-router-dom';
import styles from '../components/Header.module.scss';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className={styles.container}>
        <img src={logo} alt="Kasa logo"/>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;