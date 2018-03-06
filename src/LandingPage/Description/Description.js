import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider, Button } from 'material-ui';
import { connect } from 'react-redux';
import { select } from '../../redux/reducers';
import styles from './description.scss';
import lang from './description.lang';
import twitter from './socialIcons/twitter.svg';
import github from './socialIcons/github.svg';
import linkedin from './socialIcons/linkedin.svg';
import facebook from './socialIcons/facebook.svg';

const handleShowCv = () => window.open('https://www.dropbox.com/s/ydwsreqq1eckp7f/Resume%202018.jpg?dl=0');

const handleMail = () => window.open('mailto:jean.dessane@gmail.com');


const Description = props => (
  <Paper style={props.style} className={styles.container}>
    <p className={styles.desc}>
      {props.trad(lang.description)}
    </p>
    <div className={styles.socials}>
      <a href="https://github.com/jean9696" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/jeandessane/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://www.facebook.com/jean.dessane" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://twitter.com/JDessane" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
    <Divider />
    <div className={styles.buttonContainer}>
      <Button variant="raised" color="primary" className={styles.button} onClick={handleShowCv}>
        {props.trad(lang.cv)}
      </Button>
      <Button variant="raised" color="primary" className={styles.button} onClick={handleMail}>
        {props.trad(lang.contactMe)}
      </Button>
    </div>
  </Paper>
);

Description.propTypes = {
  trad: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Description.defaultProps = {
  style: {},
};

const mapStateToProps = state => ({
  trad: select.trad(state),
});


export default connect(mapStateToProps)(Description);
