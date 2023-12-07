import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Carousel from './Carousel';
import styles from './FicheLogement.module.scss'
import Dropdown from './Dropdown'

const FicheLogement = () => {
  let { logementId } = useParams();
  const logement = logements.find(logement => logement.id === logementId);



  return (
    <div>
      <Carousel images={logement.pictures} />

      <div className={styles.description}>
        <div className={styles.title}>
          <h1>{logement.title}</h1>
          <p></p>
        </div>
        <div className={styles.profile}>
          <span>Alexandre Dumas</span>
          <img alt='profile'></img>
        </div>
        <div className={styles.tags}></div>
        <div className={styles.rates}></div>
        <div className={styles.details}>
          <Dropdown buttonText='Description' contentText={logement.description} />
          <Dropdown buttonText='Équipements' contentText={logement.equipments} />
        </div>

      </div>
    </div>
  );
};

export default FicheLogement;
