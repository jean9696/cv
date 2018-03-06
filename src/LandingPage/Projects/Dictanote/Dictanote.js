import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import { connect } from 'react-redux';
import { select } from '../../../redux/reducers';
import styles from './dictanote.scss';
import logo from './dictanoteLogo.png';
import example from './dictanote.png';
import lang from './dictanote.lang';

const handleButtonPress = () => window.open('https://play.google.com/store/apps/details?id=com.dessanedev.dictaNote');


const Dictanote = ({ trad }) => (
  <div className={styles.container}>
    <div className={styles.description}>
      <div>
        <img src={logo} alt="Dictanote" />
      </div>
      <p>{trad(lang.desc)}</p>
      <Button variant="raised" color="primary" onClick={handleButtonPress}>
        {trad(lang.see)}
      </Button>
    </div>
    <div>
      <img src={example} alt="example" />
    </div>
  </div>
);

Dictanote.propTypes = {
  trad: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  trad: select.trad(state),
});

export default connect(mapStateToProps)(Dictanote);
