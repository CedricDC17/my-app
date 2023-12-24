import React from 'react';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => (
  <div className={styles.tagsContainer}>
    {tags.map((tag, index) => (
      <span key={index} className={styles.tagBubble}>{tag}</span>
    ))}
  </div>
);

export default Tags;