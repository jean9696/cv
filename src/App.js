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

const Page = ({ title }) => ( //eslint-disable-line
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
  </div>
);


const About = () => (
  <Page title="About" />
);

const Settings = () => (
  <Page title="Settings" />
);

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
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
