import React, { useState } from 'react';
import styles from '../components/Dropdown.module.scss';

const Dropdown = ({ buttonText, contentText , style}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const contentClass = isOpen ? `${styles.dropdownContent} ${styles.active}` : styles.dropdownContent;

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={toggleDropdown}>
                {buttonText}
            </button>
            <div className={`${contentClass} ${style}`}>
                <div className={styles.dropContainer}>
                    {Array.isArray(contentText) ? (
                        contentText.map((item, index) => (
                            <p key={index} className={styles.droplist}>{item}</p>
                        ))
                    ) : (
                        <p className={styles.droptxt}>{contentText}</p>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Dropdown;


