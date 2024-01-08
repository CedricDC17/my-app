import { Link } from 'react-router-dom';
import styles from '../components/NotFound.module.scss'

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/my-app" className={styles.link}>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
