import React from 'react';
import Icon from 'material-ui-icons/Title';
import PropTypes from 'prop-types';
import styles from './title.scss';

export const Title = ({ title, icon }) => (
  <div className={styles.container}>
    <div>{icon}</div>
    <h1>{title}</h1>
  </div>
);

Title.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

Title.defaultProps = {
  icon: <Icon />,
  title: 'Title',
};

export default Title;
