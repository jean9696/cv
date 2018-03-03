import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { connect } from 'react-redux';
import SkillIcon from 'material-ui-icons/Laptop';
import { LinearProgress } from 'material-ui/Progress';
import { select } from '../../redux/reducers';
import styles from './skills.scss';
import lang from './skills.lang';
import Title from '../Title/Title';
import react from './react.png';
import firebase from './firebase.png';
import rn from './rn.png';
import pwa from './pwa.png';
import node from './node.png';

const Skills = props => (
  <div style={props.style} className={styles.container}>
    <Title title={props.trad(lang.skills)} icon={<SkillIcon />} />
    <Paper className={styles.bestSkillsContainer}>
      <h3>{props.trad(lang.whatILike)}</h3>
      <div>
        <div><img src={react} alt="react" /></div>
        <div><img src={firebase} alt="firebase" /></div>
        <div><img src={node} alt="node" /></div>
        <div><img src={rn} alt="rn" /></div>
        <div><img src={pwa} alt="pwa" /></div>
      </div>
    </Paper>
    <Paper className={styles.content}>
      <h3>Languages</h3>
      <div>
        <div className={styles.skill}>
          <p>PHP 7</p>
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <p>JAVA</p>
          <LinearProgress color="secondary" variant="determinate" value={75} />
          <p>Python</p>
          <LinearProgress color="secondary" variant="determinate" value={70} />
        </div>
        <div className={styles.skill}>
          <p>HTML5/CSS3</p>
          <LinearProgress color="secondary" variant="determinate" value={95} />
          <p>Javascript</p>
          <LinearProgress color="secondary" variant="determinate" value={95} />
          <p>NodeJs</p>
          <LinearProgress color="secondary" variant="determinate" value={90} />
        </div>
        <div className={styles.skill}>
          <p>SQL</p>
          <LinearProgress color="secondary" variant="determinate" value={85} />
          <p>MongoDB</p>
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <p>GraphQL</p>
          <LinearProgress color="secondary" variant="determinate" value={70} />
        </div>
      </div>
    </Paper>
    <Paper className={styles.softSkills}>
      <h3>SoftSkills</h3>
      <div>
        <div className={styles.skill}>
          <p>Français</p>
          <LinearProgress color="primary" variant="determinate" value={100} />
          <p>Anglais</p>
          <LinearProgress color="primary" variant="determinate" value={85} />
        </div>
        <div className={styles.skill}>
          <p>Agile</p>
          <LinearProgress color="primary" variant="determinate" value={85} />
          <p>Autonomie</p>
          <LinearProgress color="primary" variant="determinate" value={95} />
        </div>
        <div className={styles.skill}>
          <p>Leadership</p>
          <LinearProgress color="primary" variant="determinate" value={80} />
          <p>Travail en équipe</p>
          <LinearProgress color="primary" variant="determinate" value={90} />
        </div>
      </div>
    </Paper>
  </div>
);

Skills.propTypes = {
  trad: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Skills.defaultProps = {
  style: {},
};

const mapStateToProps = state => ({
  trad: select.trad(state),
});


export default connect(mapStateToProps)(Skills);
