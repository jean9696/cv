import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import configureStore from './redux/configureStore';
import Lang from './Lang/Lang';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      main: '#546E7A',
    },
  },
});


import { Button } from 'material-ui'; //eslint-disable-line
import morse from './charlotte.wav'; //eslint-disable-line
/* eslint-disable react/no-unescaped-entities */
const playMorse = () => {
  const audio = new Audio(morse);
  audio.play();
};
const Charlotte = () => (<div>
  <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/International_Morse_Code-fr.svg/1200px-International_Morse_Code-fr.svg.png" alt="morse" />
  <Button variant="raised" color="primary" onClick={playMorse}>écouter</Button>
  <p>
    Mon premier me demande d'y aller<br />
    Mon deuxième se trouve dans les chambres<br />
    Mon troisième est le son de la dernière lettre de l'alphabet<br />
    Mon quatrième est indispensable aux omelettes<br />
    <br />
    Mon tout sert à voyager
  </p>
</div>);


const store = configureStore();

class App extends Component { //eslint-disable-line
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <div style={{ position: 'absolute', right: 0, zIndex: 5 }}>
                <Lang />
              </div>
              <Route exact path="/" component={LandingPage} />
              <Route path="/charlotte" component={Charlotte} />
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
