import {
  LANG_CHANGE,
} from '../redux/actionTypes';

export function changeLanguage(lang) { //eslint-disable-line
  return {
    type: LANG_CHANGE,
    lang,
  };
}
