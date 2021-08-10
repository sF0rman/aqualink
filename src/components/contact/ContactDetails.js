import React from 'react'
import { useTranslation } from 'react-i18next';
import data from '../../data/data.json';

const ContactDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="panel contact-details">
      <p><b>{t('contact.ceo')}</b><br /> {data.contact.ceo}</p>
      <p><b>{t('contact.email')}:</b> {data.contact.email}<br />
        <b>{t('contact.telephone')}:</b> {data.contact.phone}</p>
      <p>
        <b>{t('contact.address')}:</b><br />
        {data.contact.addr.street}<br />
        {data.contact.addr.postcode} {data.contact.addr.postarea}<br />
        {data.contact.addr.city}, {data.contact.addr.country}
      </p>
    </div>
  )
}

export default ContactDetails;