import React from 'react';
import './AboutMe.css';
import { useTranslation } from 'react-i18next';
const AboutMe = () => {
  const { t } = useTranslation();
  const skills = [
    { name: 'Spring Boot', level:'80%'},
    { name: 'Java', level:'80%'},
    { name: 'React', level: '75%' },
    { name: 'Angular', level: '60%'},
    { name: 'JavaScript', level: '70%' },
    { name: 'JQuery', level:'70%'},
    { name: 'SQL', level:'90%'},
    { name: 'MongoDB', level:'60%'},
    { name:'HTML', level:'90%'},
    { name:'CSS', level:'70%'},
    { name:'Bootstrap', level:'80%'},
    { name: 'Laravel', level:'70%'},
    { name: 'PHP', level:'65%'}
  ];

  return (
    <div className="AboutMe container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <p>
          {t('aboutText')}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <h3>{t('studies')}</h3>
          <ul>
            <li>{t('first-degree')}
            </li>
            <li>{t('second-degree')}</li>
          </ul>
        </div>
        
        <div className="col-12 col-md-6">
        <h3>{t('skills')}</h3>
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-label">{skill.name}</div>
              <div className="progress">
                <div className="progress-bar" style={{width: skill.level}}>{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
