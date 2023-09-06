import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import codingTogetherImage from '../../assets/images/coding-together.png';
import musicWorldImage from '../../assets/images/musicWorld.png';
import { useTranslation } from 'react-i18next';
const Portfolio = () => {
  const { t } = useTranslation();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const projects = [
    {
      title: "MusicWorld",
      description: t('musicworld-description'),
      image: musicWorldImage,
      link: "https://mburillo.github.io/musicworld",
      github: "https://mburillo.github.io/tfg"
    },
    {
      title: "CodingTogether",
      description: t('codingtogether-description'),
      image: codingTogetherImage,
      link: "https://mburillo.github.io/tfg",
      github: "https://github.com/mburillo/full-coding-together"
    },
  ];

  return (
    <div ref={inViewRef} className={`my-component ${inView ? 'active' : ''}`}>
      <div id="portfolio" className="portfolio-section">
        <h1 className="text-center mb-4">{t('my-portfolio')}</h1>
        <div className="col-lg-6 text-start intro-paragraph">
  <p>{t('portfolio-introduction')}</p>
</div>

        {projects.map((project, index) => (
          <div key={index} className="row align-items-center my-4">
            <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2 text-start' : 'order-lg-1 text-end'}`}>
              <div className={`description centered-text ${index % 2 === 0 ? 'ps-5' : 'pe-5'}`}>
                <p>
                  {project.description.split('|').map((item, i, arr) =>
                    i === arr.length - 1 ? item : <>
                      {item}
                      <br />
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1 text-end' : 'order-lg-2 text-start'}`}>
              <div className={`card custom-card ${index % 2 === 0 ? 'pe-5' : 'ps-5'}`}>
                <img src={project.image} className="card-img-top" alt={`${project.title} imagen`} />
                <div className="card-body">
                  <h5 className="card-title text-start">{project.title}</h5>
                  <div className="link-icons d-flex justify-content-center">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faHtml5} size="2x" />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
