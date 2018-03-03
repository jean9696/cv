import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import logo from './logo.svg';
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
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
