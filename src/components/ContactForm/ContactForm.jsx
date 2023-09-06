import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
function ContactForm() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });
  const [state, handleSubmit] = useForm("xgejyvoo");
  const { t } = useTranslation();
  if (state.succeeded) {
      return <p>Thanks for reaching me!</p>;
  }  
  return (
    <div ref={inViewRef} className={`my-component ${inView ? 'active' : ''}`}>
    <div className='contact mb-5'>
      <h1 className='text-center mb-4'>{t('contact-me')}</h1>
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
        {t('send')}
      </button>
    </form>
    </div>
    </div>
  );
}



export default ContactForm;
