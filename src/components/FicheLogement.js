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
      <div className={styles.carousel}>
      <Carousel images={logement.pictures} />
      </div>

      <div className={styles.description}>
        <div className={styles.title}>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className={styles.profile}>
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt='profile'></img>
        </div>
        <div className={styles.tagsContainer}>
          {logement.tags.map((tag, index) => (
            <span key={index} className={styles.tagBubble}>{tag}</span>
          ))}
        </div>
        <div className={styles.rates}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index < logement.rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <div className={styles.details}>
          <Dropdown buttonText='Description' contentText={logement.description} />
          <Dropdown buttonText='Équipements' contentText={logement.equipments} />
        </div>
      </div>
    </div>

  );
};

export default FicheLogement;
