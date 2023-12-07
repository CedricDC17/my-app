import { Link } from "react-router-dom";
import logements from '../logements.json';
import styles from '../components/Home.module.scss';

function Home() {
    return (
        <div>
            <div className={styles.banner}>
                <span>Chez vous, partout et ailleurs</span>
            </div>

            <div className={styles.container}>
                {logements.map(logement => (
                    <Link to={`/fiche_logement/${logement.id}`} key={logement.id} className={styles.card}>
                        <img src={logement.cover} alt={logement.title} />
                        <div className={styles.cardTitle}>{logement.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
