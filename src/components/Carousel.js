import React, { useState } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            {images.length > 1 && (
                <>
                    <button onClick={goToPrevious}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                    </svg></button>
                </>)}
            <img src={images[currentImageIndex]} alt="Logement" />
            {images.length > 1 && (
                <>
                    <div className={styles.imageNumber}>
                        {currentImageIndex + 1} / {images.length}
                    </div>
                    <button onClick={goToNext}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                    </svg></button>
                </>)}
        </div>
    );
};

export default Carousel;