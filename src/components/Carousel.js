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
    <button onClick={goToPrevious}>&lt;</button>
    <img src={images[currentImageIndex]} alt="Logement" />
    <div className={styles.imageNumber}>
        {currentImageIndex + 1} / {images.length}
    </div>
    <button onClick={goToNext}>&gt;</button>
</div>
    );
};

export default Carousel;