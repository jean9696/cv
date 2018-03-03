import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider, Button } from 'material-ui';
import { connect } from 'react-redux';
import { select } from '../../redux/reducers';
import styles from './description.scss';
import lang from './description.lang';


const onContactMe = () => {
  
}


const Description = props => (
  <Paper style={props.style} className={styles.container}>
    <p className={styles.desc}>
      {props.trad(lang.description)}
    </p>
    <Divider />
    <div className={styles.buttonContainer}>
      <Button variant="raised" color="primary" className={styles.button}>
        {props.trad(lang.cv)}
      </Button>
      <Button variant="raised" color="primary" className={styles.button}>
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
