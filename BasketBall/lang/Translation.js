import {getLocales} from 'react-native-localize';
import en from './locales/en';
import es from './locales/es';

const language = {
  'es-MX': es,
  'en-US': en,
};

const t = word => {
  const lang = getLocales()[0].languageTag;
  let translation = `${word} is undefined`;
  if (language[lang][word]) {
    translation = language[lang][word];
  }
  return translation;
};

export default t;
