import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from 'material-ui-icons/Work';
import { connect } from 'react-redux';
import ExperienceIcon from 'material-ui-icons/Layers';
import { select } from '../../redux/reducers';
import lang from './experience.lang';
import styles from './experience.scss';
import Title from '../Title/Title';
import rdsf from './rdsf.png';
import exg from './exg.png';
import invitio from './invitio.png';
import dessaneDev from './dessaneDev.jpg';
import nikki from './nikki.png';
import mutum from './mutum.png';

const handleOpenTab = url => window.open(url);

const Education = ({ trad }) => (
  <div className={styles.container}>
    <Title title={trad(lang.title)} icon={<ExperienceIcon />} />
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2017 - 2018 (5 mois)"
        iconStyle={{ background: '#38393E', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div onClick={() => handleOpenTab('https://www.rdsfbox.eu')}><img src={rdsf} alt="RDSF" /></div>
          <div>
            <h3>{trad(lang.rdsfTitle)}</h3>
            <h4>{trad(lang.rdsfSubTitle)}</h4>
          </div>
        </div>
        <p>{trad(lang.rdsfContent)}</p>
        <p className={styles.techs}>{trad(lang.rdsfTechs)}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2017 (4 mois)"
        iconStyle={{ background: '#000000', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div onClick={() => handleOpenTab('http://gamebook.io/')}><img src={exg} alt="Gamebook" /></div>
          <div>
            <h3>{trad(lang.gamebookTitle)}</h3>
            <h4>{trad(lang.gamebookSubTitle)}</h4>
          </div>
        </div>
        <p>{trad(lang.gamebookContent)}</p>
        <p className={styles.techs}>{trad(lang.gamebookTechs)}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2016 - 2017 (7 mois)"
        iconStyle={{ background: '#0060C0', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div onClick={() => handleOpenTab('http://www.invit.io/')}><img src={invitio} alt="Invitio" /></div>
          <div>
            <h3>{trad(lang.invitioTitle)}</h3>
            <h4>{trad(lang.invitioSubTitle)}</h4>
          </div>
        </div>
        <p>{trad(lang.invitioContent)}</p>
        <p className={styles.techs}>{trad(lang.invitioTechs)}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2016 - 2018 (2 ans)"
        iconStyle={{ background: '#0E47A1', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div><img src={dessaneDev} alt="dessaneDev" /></div>
          <div>
            <h3>{trad(lang.dessaneDevTitle)}</h3>
            <h4>{trad(lang.dessaneDevSubTitle)}</h4>
          </div>
        </div>
        <p className={styles.companies}>{trad(lang.dessaneDevCompanies)}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2015 - 2017 (2 ans)"
        iconStyle={{ background: '#6035E7', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div><img src={nikki} alt="nikki" style={{ maxWidth: '40px' }} /></div>
          <div>
            <h3>{trad(lang.nikkiTitle)}</h3>
            <h4>{trad(lang.nikkiSubTitle)}</h4>
          </div>
        </div>
        <p>{trad(lang.nikkiContent)}</p>
        <p className={styles.techs}>{trad(lang.nikkiTechs)}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2015 (1 mois)"
        iconStyle={{ background: '#1BA5B0', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <div className={styles.cardTitle}>
          <div onClick={() => handleOpenTab('https://www.mutum.com/home')}><img src={mutum} alt="mutum" /></div>
          <div>
            <h3>{trad(lang.mutumTitle)}</h3>
            <h4>{trad(lang.mutumSubTitle)}</h4>
          </div>
        </div>
        <p>{trad(lang.mutumContent)}</p>
        <p className={styles.techs}>{trad(lang.mutumTechs)}</p>
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
