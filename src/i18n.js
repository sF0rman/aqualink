import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import norwegian from './i18n/no.json';
import english from './i18n/en.json';

const resources = {
  en: english,
  no: norwegian
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: !window.localStorage.getItem('language') ? 'en' : window.localStorage.getItem('language'),

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;