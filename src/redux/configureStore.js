import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

export default function configureStore(initialState) {
  const middlewares = [
    thunk,
    routerMiddleware(),
  ];
  const enhancers = [
    applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(), //eslint-disable-line
  ];
  const composeEnhancers = compose; //eslint-disable-line

  return createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );
}
