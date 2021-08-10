import React, { useEffect, useState } from 'react'
import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import emailjs from 'emailjs-com';
import Toast from '../Toast';

import { useTranslation } from 'react-i18next';

const EMAIL_USER = process.env.REACT_APP_EMAIL_ID;
const EMAIL_SERVICE = process.env.REACT_APP_EMAIL_SERVICE;
const EMAIL_TEMPLATE = process.env.REACT_APP_EMAIL_TEMPLATE;

const ContactForm = () => {

  const { t } = useTranslation();

  const [nameOk, setNameOk] = useState('');
  const [emailOk, setEmailOk] = useState('');
  const [subjectOk, setSubjectOk] = useState('');
  const [messageOk, setMessageOk] = useState('');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [toast, setToast] = useState({
    show: false,
    title: '',
    message: '',
    error: false
  });

  useEffect(() => {
    emailjs.init(EMAIL_USER);
  }, []);

  const updateFormData = e => {
    switch (e.target.name) {
      case 'from_name':
        setFormData({ ...formData, from_name: e.target.value });
        break;
      case 'from_email':
        setFormData({ ...formData, from_email: e.target.value });
        break;
      case 'subject':
        setFormData({ ...formData, subject: e.target.value });
        break;
      case 'message':
        setFormData({ ...formData, message: e.target.value });
        break;
      default:
        break;
    }
  }

  const clearNameError = () => {
    setNameOk('');
  }
  const clearEmailError = () => {
    setEmailOk('');
  }
  const clearSubjectError = () => {
    setSubjectOk('');
  }
  const clearMessageError = () => {
    setMessageOk('');
  }

  const validateName = () => {
    if (formData.from_name.length === 0) {
      setNameOk(t('contact.error.name'));
      return false;
    } else {
      setNameOk('');
      return true;
    }
  }

  const validEmail = () => {
    const emailRegex = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
    if (emailRegex.test(formData.from_email)) {
      setEmailOk('');
      return true;
    } else {
      setEmailOk(t('contact.error.email'));
      return false;
    }
  }

  const validSubject = () => {
    if (formData.subject.length < 5) {
      setSubjectOk(t('contact.error.subject'));
      return false;
    } else {
      setSubjectOk('');
      return true;
    }
  }

  const validMessage = () => {
    if (formData.message.length < 9) {
      setMessageOk(t('contact.error.message'));
      return false;
    } else {
      setMessageOk('');
      return true;
    }
  }

  const validateForm = () => {
    validateName();
    validEmail();
    validSubject();
    validMessage();
    return validateName() && validEmail() && validSubject() && validMessage();
  }

  const clearForm = () => {
    setFormData({
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    });

    setNameOk('');
    setEmailOk('');
    setSubjectOk('');
    setMessageOk('');
  }

  const sendEmail = async (e) => {
    if (validateForm()) {
      emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, formData)
        .then(() => {
          setToast({
            show: true,
            title: 'Success',
            message: 'Message sent successfully.',
            error: false
          });
        }).catch(err => {
          setToast({
            show: true,
            title: 'Error',
            message: 'Unable to send message',
            error: true
          })
        });
      clearForm();
      setTimeout(() => setToast({
        show: false,
        title: '',
        message: '',
        error: false
      }), 3000);
    }
  }

  return (
    <div className="contact-form">
      {toast.show && <Toast title={toast.title} message={toast.message} error={toast.error} />}
      <TextInput
        label={t('contact.name')}
        name="from_name"
        onChange={updateFormData}
        onBlur={validateName}
        onFocus={clearNameError}
        value={formData.from_name}
        error={nameOk}
      />
      <TextInput
        label={t('contact.email')}
        type="email" name="from_email"
        onChange={updateFormData}
        onBlur={validEmail}
        onFocus={clearEmailError}
        value={formData.from_email}
        error={emailOk}
      />
      <TextInput
        label={t('contact.subject')}
        name="subject"
        onChange={updateFormData}
        onBlur={validSubject}
        onFocus={clearSubjectError}
        value={formData.subject}
        error={subjectOk}
      />
      <TextArea
        label={t('contact.message')}
        name="message"
        onChange={updateFormData}
        onBlur={validMessage}
        onFocus={clearMessageError}
        value={formData.message}
        error={messageOk}
      />
      <button className="primary" onClick={sendEmail}>Send</button>
    </div>
  )
}

export default ContactForm;