import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import i18n from '../../translation/i18n';
import { useTranslation } from 'react-i18next';
const NavBar = () => {
  const [language, setLanguage] = useState('en'); 
  const { t } = useTranslation();
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link activeClass="active" to="home" spy={true} smooth={true} className="nav-link">{t('home')}</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} className="nav-link">{t('about-me')}</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="contact" spy={true} smooth={true} className="nav-link">{t('contact-me')}</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button className="btn btn-link dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                {t('language')}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('es')}>Español</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
