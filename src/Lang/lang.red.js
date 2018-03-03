import fFindKey from 'lodash/fp/findKey';
import {
  LANG_CHANGE,
} from '../redux/actionTypes';

export const langs = {
  french: 'fr',
  english: 'en',
};

export const getLangLabel = l => fFindKey(e => l === e)(langs);

export const trad = (lang, word) => (word ? word[lang] || word.en || word.fr : null);

const userLang = (navigator.language || navigator.userLanguage).split('-')[0];
const defaultLang = fFindKey(e => userLang === e)(langs) ? userLang : 'en';

export default (state = defaultLang, action) => {
  switch (action.type) {
    case LANG_CHANGE: {
      return action.lang !== undefined ? action.lang : 'en';
    }
    default:
      return state;
  }
};


export const selectors = {
  currentLang: lang => lang,
  trad: lang => word => trad(lang, word),
};
