import React from 'react';
import { Paper, ListItem, List, ListItemText, ListItemIcon } from 'material-ui';
import TelIcon from 'material-ui-icons/Phone';
import MailIcon from 'material-ui-icons/Mail';
import LocationIcon from 'material-ui-icons/LocationOn';

import styles from './mainCard.scss';
import jean from './jean.jpg';
import logo from '../../assets/dessaneDev.png';

export default props => (
  <Paper {...props} className={styles.presentationCard}>
    <div className={styles.description}>
      <h1>Jean Dessane <img src={logo} alt="logo" /></h1>
      <h3>Software Engineer - Full Stack developer Freelance</h3>
      <List className={styles.list}>
        <ListItem>
          <ListItemIcon>
            <TelIcon />
          </ListItemIcon>
          <ListItemText inset primary="+33 6 24 60 01 25" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText inset primary="jean.dessane@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationIcon />
          </ListItemIcon>
          <ListItemText inset primary="Edinburgh" />
        </ListItem>
      </List>
    </div>
    <div className={styles.picture}>
      <img src={jean} alt="Jean Dessane" />
    </div>
  </Paper>
);
