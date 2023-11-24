import logements from '../logements.json';
import styles from '../Logements.module.scss';
import paysageBackground from '../paysage-background.png';

function Home() {
  return (
    <div>
        <div className={styles.slogan}>
            <img src={paysageBackground} className={styles.paysage} alt="Paysages au bord d'une côte" />
            <div className={styles.slogan_text}>Chez vous, partout et ailleurs</div>
        </div>
        <div className={styles.container}>
            {logements.map(logement => (
                <div key={logement.id} className={styles.logementCard}>
                    <div className={styles.imageText}>
                        <img src={logement.cover} alt={logement.title} className={styles.image} />
                        <div className={styles.titleOverlay}>{logement.title}</div>
                    </div>
                    {/* Ajouter d'autres détails si nécessaire */}
                </div>
            ))}
        </div>
    </div>
);
}

export default Home;
