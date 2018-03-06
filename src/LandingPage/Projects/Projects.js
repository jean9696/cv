/* eslint-disable no-return-assign */
import React from 'react';
import ProjectIcon from 'material-ui-icons/Pages';
import Carousel from 'nuka-carousel';
import styles from './projects.scss';
import Title from './../Title/Title';

import Nikki from './Nikki/Nikki';
import Dictanote from './Dictanote/Dictanote';

export default () => [
  <div key="projectTitle" className={styles.titleContainer}>
    <Title icon={<ProjectIcon />} title="Projects" />
  </div>,
  <Carousel
    key="projectCaroussel"
    className={styles.container} autoplay
    autoplayInterval={10000} wrapAround
  >
    <Nikki />
    <Dictanote />
  </Carousel>,
];

