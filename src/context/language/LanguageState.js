import React, { useReducer } from 'react'

import { useTranslation } from 'react-i18next';

import LanguageContext from './languageContext';
import LanguageReducer from './languageReducer';

const LanguageState = ({ children }) => {
  const initialState = {
    language: localStorage.getItem('language') ? localStorage.getItem('language') === 'no' : false
  };

  const { i18n } = useTranslation();

  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    console.log('language:', lang, lang === 'no');
    dispatch({ type: 'SET_LANGUAGE', payload: lang === 'no' });
  }

  return <LanguageContext.Provider value={
    {
      language: state.language,
      setLanguage
    }
  }>{children}</LanguageContext.Provider>
}

export default LanguageState;