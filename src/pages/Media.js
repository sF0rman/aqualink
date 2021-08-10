import React from 'react';
import { useTranslation } from 'react-i18next';


const Media = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('nav.media')}</h2>
      <p>Her var det ingenting...</p>
    </div>
  )
}

export default Media;