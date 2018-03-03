import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, ListItemIcon, ListItemText } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { select } from '../redux/reducers';
import { changeLanguage } from './lang.act';
import { langs } from './lang.red';
import styles from './lang.scss';

const icons = Object.keys(langs).reduce((context, l) => ({
  ...context,
  [l]: require(`../assets/flags/${l}.png`) //eslint-disable-line
}), {});

class Lang extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <MenuList
          style={{ padding: 0 }}
          onChange={this.handleChange} open={this.state.open}
        >
          {Object.keys(langs).map(k => (
            <MenuItem
              key={k}
              selected={this.props.value === langs[k]}
              onClick={() => this.props.changeLanguage(langs[k])}
            >
              <ListItemIcon>
                <img src={icons[k]} alt={k} className={styles.flag} />
              </ListItemIcon>
              <ListItemText inset primary={langs[k]} />
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  value: select.currentLang(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeLanguage,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Lang);

