import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lang, * as fromLang from '../Lang/lang.red';

const reducers = {
  lang,
  routing: routerReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;


export const exportSelectors = (reducerName, from) => ({
  // overload the first argument of the selectors with the state of
  // the specific reducer...
  // create a new overloaded arguments array...
  // apply the new arguments to the selector function...
  ...from,
  ...Object.keys(from.selectors || {}).reduce((context, s) => ({
    ...context,
    [s]: (state, ...args) => from.selectors[s].apply(null, [state[reducerName], ...args]),
  }), {}),
});

const selectInternal = {
  ...exportSelectors('lang', fromLang),
};


export const select = {
  history: state => state.history,
  ...selectInternal,
};
