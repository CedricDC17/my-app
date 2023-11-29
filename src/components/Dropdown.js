import React from 'react';
import styles from '../components/Dropdown.module.scss';

const Dropdown = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Dropdown</button>
            <div className={styles.dropdownContent}>
                <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>
        </div>
    );
};

export default Dropdown;
