import React from 'react';
import styles from './Rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';

const starFull = <FontAwesomeIcon icon={faStar} color="#f26964" />
const starEmpty = <FontAwesomeIcon icon={faStar} color="#E3E3E3" />
const RatingStars = ({ rating }) => (
    <div className={styles.rates}>
        {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
                {index < rating ? starFull : starEmpty}
            </span>
        ))}
    </div>
);

export default RatingStars;