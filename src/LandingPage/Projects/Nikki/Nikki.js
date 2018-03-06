import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { select } from '../../../redux/reducers';
import styles from './nikki.scss';
import logo from './nikki.png';
import lang from './nikki.lang';

const Nikki = ({ trad }) => (
  <div className={styles.container}>
    <iframe
      title="nikkiVideo"
      src="https://www.youtube.com/embed/PLtmq3osTMY?rel=0&amp;controls=0&amp;showinfo=0"
      frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
    />
    <div className={styles.description}>
      <div>
        <img src={logo} alt="Nikki" />
      </div>
      <p>{trad(lang.desc)}</p>
    </div>
  </div>
);

Nikki.propTypes = {
  trad: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  trad: select.trad(state),
});

export default connect(mapStateToProps)(Nikki);
