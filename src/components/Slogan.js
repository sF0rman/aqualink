import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Slogan = () => {
  const { t } = useTranslation();

  return (
    <div className="slogan">
      <h2>{t('home.slogan.title')}</h2>
      <p>{t('home.slogan.text')}</p>
      <Link to="/products"><button className="secondary">{t('nav.products')}</button></Link>
    </div>
  )
}

export default Slogan;