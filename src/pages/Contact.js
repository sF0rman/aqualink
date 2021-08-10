import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';


const Contact = ({ hideMap }) => {
  const { t } = useTranslation();

  return (
    <div className="bg navMargin">
      {hideMap ? '' : <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.9105825956372!2d5.292242716186821!3d60.36411653466571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfbe901f5c18f%3A0xbfd2a0b28036bbb6!2sNordn%C3%A6sdalsveien%204A%2C%205146%20Fyllingsdalen!5e0!3m2!1sen!2sno!4v1627459296844!5m2!1sen!2sno" className="banner" allowFullScreen loading="lazy"></iframe>}
      <div className="container mt p">
        <h3>{t('nav.contact')}</h3>
        <div className="grid-2-1">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div >
  )
}

export default Contact;