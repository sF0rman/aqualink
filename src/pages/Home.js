import React, { useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import Video from '../components/media/Video';
import Slogan from '../components/Slogan';
import About from './About';
import languageContext from '../context/language/languageContext';

const Home = () => {

  const about = useRef(null);
  const home = useRef(null);
  const location = useLocation();
  const lang = useContext(languageContext).language;

  useEffect(() => {
    if (location.pathname.endsWith('about') && about.current) {
      const position = about.current.getBoundingClientRect().top;
      console.log(position);
      about.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [location])

  return (
    <div>
      <div className="homeGrid" ref={home}>
        <div className="container">
          <Slogan />
        </div>
      </div>
      <div className="ribbon ribbon-transparent">
        <div className="container">
          <Video url={lang ? "https://player.vimeo.com/video/507014796" : "https://player.vimeo.com/video/507014568"} />
        </div>
      </div>

      <div className="ribbon ribbon-light gap b">
        <div className="container" ref={about}>
          <About hideBanner={true} />
        </div>
      </div>
      <div className="ribbon ribbon-dark gap">
        <div className="container">
          <div className="grid-2-1">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;