import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgejyvoo");
  const { t } = useTranslation();
  if (state.succeeded) {
      return <p>Thanks for reaching me!</p>;
  }
  return (
    <div className='contact'>
      <h1 className='text-center'>{t('contact-me')}</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        {t('your-name')}
      </label>
      <input
        id="name"
        type="text"
        name="name"
      />
      <ValidationError 
        prefix="Nombre" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">
        {t('email-address')}
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">
        {t('email-content')}
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Mensaje" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
    </div>
  );
}



export default ContactForm;
