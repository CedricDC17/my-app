import React, { useState } from 'react';
import styles from '../components/Dropdown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



const Dropdown = ({ buttonText, contentText, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const arrowClass = isOpen ? `${styles.arrow} ${styles.activeArrow}` : styles.arrow;
    const arrow = <FontAwesomeIcon className={arrowClass} icon={faChevronUp} />
    const contentClass = isOpen ? `${styles.dropdownContent} ${styles.active}` : styles.dropdownContent;

    return (
        <div className={styles.dropdown}>
            <div className={styles.DropdownbuttonContainer}>
                <button className={styles.dropbtn} onClick={toggleDropdown}>
                    {buttonText}
                    {arrow}
                </button>
            </div>
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


