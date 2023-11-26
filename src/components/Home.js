import logements from '../logements.json';
import styles from '../components/Home.module.scss';
// import paysageBackground from '../assets/paysage-background.png';

function Home() {
    return (
        <div>
            {/* <div className={styles.slogan}>
            <img src={paysageBackground} className={styles.paysage} alt="Paysages au bord d'une côte" />
            <div className={styles.slogan_text}>Chez vous, partout et ailleurs</div>
        </div> */}
            <div className={styles.slogan}>
                <span>Chez vous, partout et ailleurs</span>
            </div>

            <div className={styles.container}>
                {logements.map(logement => (
                    <div key={logement.id} className={styles.card}>
                        <img src={logement.cover} alt={logement.title} />
                        <div className={styles.cardTitle}>{logement.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

