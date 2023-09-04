import React from 'react';
import './Home.css'; 
import backgroundVideo from'../../assets/gifs/background.mp4';
import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home home-container">
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="overlay-text">
          <h1>  {t('home-text').split('|').map((str, index) => 
    index !== 1 ? 
      <div key={index} className={index === 0 ? 'may-center' : ''}>{str}</div> : 
      <div key={index} style={{textAlign: 'center'}}>{str}</div>
  )}
</h1>

          </div>
        </div>
      );
};

export default Home;
