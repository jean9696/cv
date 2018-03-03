import React from 'react';
import background from './background.jpg';
import styles from './layout.css';

export default () => (
  <div>
    <img className={styles.img} src={background} alt="background" />
    test
  </div>
)