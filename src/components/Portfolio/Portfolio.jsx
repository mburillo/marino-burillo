import React from 'react';
import './Portfolio.css';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import codingTogetherImage from '../../assets/images/coding-together.png';
import { useTranslation } from 'react-i18next';
const Portfolio = () => {
  const { t } = useTranslation();
const projects = [
  {
    title: "MusicWorld",
    description: t('musicworld-description'),
    image: codingTogetherImage,
    link: "https://example.com/proyecto1",
    github: "https://github.com/usuario/proyecto1"
  },
  {
    title: "CodingTogether",
    description: t('codingtogether-description'),
    image: codingTogetherImage,
    link: "https://example.com/proyecto2",
    github: "https://github.com/usuario/proyecto2"
  },
];

return (
  <div id="portfolio" className="portfolio-section">
    <h2 className="text-center">{t('my-portfolio')}</h2> 
    <p>{t('portfolio-introduction')}</p>
    {projects.map((project, index) => (
      <div key={index} className="row align-items-center my-4">
        <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2 text-start' : 'order-lg-1 text-end'}`}>
          <div className={`description centered-text ${index % 2 === 0 ? 'ps-5' : 'pe-5'}`}>
            <p>{project.description}</p>
          </div>
        </div>
        <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1 text-end' : 'order-lg-2 text-start'}`}>
          <div className={`card custom-card ${index % 2 === 0 ? 'pe-5' : 'ps-5'}`}>
            <img src={project.image} className="card-img-top" alt={`${project.title} imagen`} />
            <div className="card-body">
              <h5 className="card-title text-start">{project.title}</h5> {/* Título a la izquierda */}
              <div className="link-icons d-flex justify-content-center"> {/* Iconos centrados */}
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
);
    }
export default Portfolio;
