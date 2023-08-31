import React from 'react';
import './Home.css'; 
import backgroundVideo from'../../assets/gifs/background.mp4';
const Home = () => {
    return (
        <div className="home home-container">
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="overlay-text">
            <h1>Me llamo Marino, soy Desarrollador Web</h1>
          </div>
        </div>
      );
};

export default Home;
