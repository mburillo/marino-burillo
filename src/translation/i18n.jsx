import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "aboutText": "Hi, I'm Marino, a passionate web developer eager to keep expanding my horizons.",
      "studies": "Studies",
      "skills": "Skills",
      "first-degree" :"Higher Technician in Development of Web Applications studied at IES Virgen de la Paloma where I learnt the basics of coding and some languages like Java, JavaScript, SQL and frameworks like ASP.NET using C#",
      "second-degree" : "Higher Technician in Multi-platform Applications Development, during this period, I deepened my understanding of various frameworks, including Android Studio with Kotlin and Unity with C#",
      "about-me": "About me",
      "contact-me": "Contact me",
      "home" :"Home",
      "language":"Language",
      "phone-number":"Phone number",
      "your-name":"Your name",
      "email-address":"Your email address",
      "email-content":"Email content"
    }
  },
  es: {
    translation: {
      "aboutText": "Hola, soy Marino, un apasionado desarrollador web con muchas ganas de seguir ampliando mis horizontes.",
      "studies": "Estudios",
      "skills": "Habilidades",
      "first-degree":"Técnico Superior en Desarrollo de Aplicaciones Web estudiado en el IES Virgen de la Paloma, curso en el que aprendí las bases de la programación y algunos lenguajes como Java, JavaScript, SQL y frameworks como ASP.NET usando C#",
      "second-degree":"Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, durante este periodo amplié mis conocimientos de lenguajes ya mencionados y di las bases de frameworks como Android Studio con Kotlin y Unity con C#",
      "about-me": "Acerca de mí",
      "contact-me": "Contacto",
      "home":"Inicio",
      "language":"Idioma",
      "phone-number":"Teléfono",
      "your-name": "Tu nombre",
      "email-address":"Tu dirección de correo",
      "email-content":"Contenido del correo"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
