import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import languageContext from '../context/language/languageContext';
import data from '../data/data.json';
import banner from '../resources/about.png';


const About = ({ hideBanner }) => {
  const { t } = useTranslation();
  const lang = useContext(languageContext).language;
  return (
    <div>
      {!hideBanner && <img className="banner" alt="about" src={banner} />}
      <div className="container">
        <div className="aboutGrid">
          <img src={banner} alt="aboutImg" className="banner aboutImg" />
          <div>
            <h2>{t('nav.about')} AQUALINK</h2>
            <div dangerouslySetInnerHTML={{ __html: lang ? data.about.no : data.about.en }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;