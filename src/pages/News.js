import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { get } from '../utils/api';

const News = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const news = await get('/news');
      console.log(news);
      if (news) {
        setNews(news.data.data);
      }
    }
    getNews();
  }, [])

  return (
    <div className="container">
      <h2>{t('nav.news')}</h2>
      {news && news.map(n => <p>{n.no_title}</p>)}
      <p>Her var det ingenting nytt...</p>
    </div>
  )
}

export default News;