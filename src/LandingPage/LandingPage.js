/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Grow } from 'material-ui';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';
import styles from './landingPage.scss';
import background from './background.jpg';
import MainCard from './MainCard/MainCard';
import Description from './Description/Description';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

export default class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mainCard: false,
      description: false,
      skills: false,
    };
    this.elements = {};
  }

  componentWillMount() {
    setTimeout(() => this.setState({ mainCard: true }), 300);
    setTimeout(() => this.setState({ description: true }), 500);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeListener('scroll', this.handleScroll);
  }

  getNodePosition = ref => ReactDOM.findDOMNode(ref).getBoundingClientRect(); //eslint-disable-line

  handleScroll = debounce(() => {
    Object.keys(this.elements).map((k) => { //eslint-disable-line
      if (document.documentElement.clientHeight * 90 / 100 > this.getNodePosition(this.elements[k]).top) { //eslint-disable-line
        this.setState({ [k]: true });
      }
    });
  });


  render() {
    return (
      <div className={styles.container}>
        <img className={styles.background} src={background} alt="background" />
        <div className={styles.content}>
          <Grow in={this.state.mainCard}>
            <MainCard />
          </Grow>
          <Grow in={this.state.description}>
            <Description />
          </Grow>
          <Education />
          <Grow in={this.state.skills} ref={ref => this.elements.skills = ref}>
            <Skills />
          </Grow>
          <Experience />
        </div>
      </div>
    );
  }
}

