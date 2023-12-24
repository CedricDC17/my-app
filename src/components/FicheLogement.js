import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Carousel from './Carousel';
import styles from './FicheLogement.module.scss';
import Dropdown from './Dropdown';
import NotFound from './NotFound';
import Rating from './Rating';
import Tags from './Tags';


function FicheLogement() {
  let { logementId } = useParams();
  const logement = logements.find(logement => logement.id === logementId);

  if (!logement) return <NotFound />

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
          <Tags tags={logement.tags} />
        </div>
        <div className={styles.rates} >
          <Rating rating={logement.rating} />
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
