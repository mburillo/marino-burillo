import React from 'react';
import './Portfolio.css';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import codingTogetherImage from '../../assets/images/coding-together.png'
const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "image1.jpg",
    link: "https://example.com/proyecto1",
    github: "https://github.com/usuario/proyecto1"
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: {codingTogetherImage},
    link: "https://example.com/proyecto2",
    github: "https://github.com/usuario/proyecto2"
  },
];

const Portfolio = () => (
    <div id="portfolio" className="portfolio-section">
      <h2>Mi Portfolio</h2>
      <p>Un vistazo a algunos de mis proyectos recientes.</p>
  
      {projects.map((project, index) => (
        <div key={index} className="row">
          <div className={`col-lg-6 d-flex ${index % 2 === 0 ? 'justify-content-end order-lg-2' : 'justify-content-start order-lg-1'}`}>
            <div className="card">
              <img src={project.image} className="card-img-top" alt={`${project.title} imagen`} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="link-icons">
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
          <div className={`col-lg-6 d-flex ${index % 2 === 0 ? 'justify-content-start order-lg-1' : 'justify-content-end order-lg-2'}`}>
            <div className="description">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

export default Portfolio;
