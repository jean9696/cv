import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from 'material-ui-icons/School';
import { connect } from 'react-redux';
import EducationIcon from 'material-ui-icons/Book';
import { select } from '../../redux/reducers';
import lang from './education.lang';
import styles from './education.scss';
import ucp from './ucp.png';
import eisti from './eisti.png';
import hw from './hw.png';
import Title from '../Title/Title';

const Education = ({ trad }) => (
  <div className={styles.container}>
    <Title title="Education" icon={<EducationIcon />} />
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2017 - 2018"
        iconStyle={{ background: '#46505B', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <div className={styles.cardTitle}>
          <div><img src={hw} alt="hw" /></div>
          <div>
            <h3>{trad(lang.hwTitle)}</h3>
            <h4>{trad(lang.hwSubTitle)}</h4>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2013 - 2018"
        iconStyle={{ background: '#004FA3', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <div className={styles.cardTitle}>
          <div><img src={eisti} alt="eisti" /></div>
          <div>
            <h3>{trad(lang.eistiTitle)}</h3>
            <h4>{trad(lang.eistiSubTitle)}</h4>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2013 - 2016"
        iconStyle={{ background: '#520FA8', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <div className={styles.cardTitle}>
          <div><img src={ucp} alt="ucp" /></div>
          <div>
            <h3>{trad(lang.ucpTitle)}</h3>
            <h4>{trad(lang.ucpSubTitle)}</h4>
          </div>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);


Education.propTypes = {
  trad: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  trad: select.trad(state),
});


export default connect(mapStateToProps)(Education);
