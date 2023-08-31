import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="social-icons">
        <a href="https://github.com/mburillo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/marino-burillo-navarro-15a102250/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="contact-details">
        <p>{t('phone-number')}: +34 635 345 735</p>
        <p>Email: mburillonavarro@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
