import styles from '../components/About.module.scss';
import Dropdown from './Dropdown';

function About() {
  return (
    <div className={styles.aboutmain}>
      <div className={styles.banner}></div>

      <div className={styles.dropdownContainer}>
        <Dropdown buttonText="FIabilité" contentText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Dropdown buttonText="Respect" contentText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " />
        <Dropdown buttonText="Service" contentText="La bienveillance fait partie des valeurs fondatrices de Kaza. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Dropdown buttonText="Sécurité" contentText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </div>
  );
}

export default About;
