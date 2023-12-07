import React, { useState } from 'react';
import styles from '../components/Dropdown.module.scss';

const Dropdown = ({ buttonText, contentText }) => {
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
            <div className={`${contentClass} ${styles.droptxt}`}>
                <p>{contentText}</p>
            </div>
        </div>
    );
    
};

export default Dropdown;
