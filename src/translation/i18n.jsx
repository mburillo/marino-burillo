import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "aboutText": "Hi, I'm Marino, a passionate web developer eager to keep expanding my horizons.",
      "studies": "Studies",
      "skills": "Skills",
      "first-degree" :"Higher Technician in Development of Web Applications studied at IES Virgen de la Paloma where I learnt the basics of coding and some languages like Java, JavaScript, SQL and frameworks like ASP.NET using C#",
      "second-degree" : "Higher Technician in Multi-platform Applications Development, during this period I deepened my understanding of various frameworks, including Android Studio with Kotlin and Unity with C#",
      "about-me": "About me",
      "contact-me": "Contact me",
      "home" :"Home",
      "language":"Language",
      "phone-number":"Phone number",
      "your-name":"Your name",
      "email-address":"Your email address",
      "email-content":"Email content",
      "musicworld-description":"This project is an ecommerce website for a music store. The project is built with Spring Boot and React and offers features such as adding various items to the cart and then purchasing them. It also supports account creation and login, creating new products if you are an administrator, tracking the status of your order, and viewing ratings from other users as well as your own. | Administrator account: sampleEmail@gmail.com encodedPassword. | Regular account: sampleEmail2@gmail.com encodedPassword.",
      "codingtogether-description":"This project was the first major project I completed. It is a social network made with Spring Boot and React, where with a user account you can follow other users, allowing you to have a feed of the users you follow as well as the posts they share. Additionally, there is a public real-time chat feature, for which I used SockJS and StompJS. The project still needs to be translated into English, as it was a final course project.",
      "my-portfolio": "My portfolio",
      "portfolio-introduction": "Here you can take a look at my most recent projects.",
      "home-text": "Transforming ideas into code and code into solutions. | I'm Marino, a Web Developer."
    }
  },
  es: {
    translation: {
      "aboutText": "Hola, soy Marino, un apasionado desarrollador web con ganas de seguir ampliando mis horizontes.",
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
      "email-content":"Contenido del correo",
      "musicworld-description":"Este proyecto es una web de ecommerce de una tienda de musica, el proyecto esta hecho con spring boot y react, tiene funcionalidades tales como añadir al carrito diversos elementos y posteriormente comprarlos; como crearse cuentas e iniciar sesion, crear nuevos productos si eres administrador o seguir el estado de tu pedido y ver las valoraciones de otros usuarios y las tuyas. | Cuenta de administrador: sampleEmail@gmail.com encodedPassword. | Cuenta normal: sampleEmail2@gmail.com encodedPassword.",
      "codingtogether-description":"Este proyecto fue el primer proyecto grande que hice, se trata de una red social hecha con Spring Boot y React nuevamente en la cual con una cuenta de usuario puedes seguir a otros usuarios haciendo que se pueda tener una feed de los usuarios que sigas así como los posts que comparten, adicionalmente hay un chat en tiempo real público en el que usé SockJS y StompJS. Falta traducir el proyecto al inglés ya que fue un proyecto de fin de curso",
      "my-portfolio" : "Mi portfolio",
      "portfolio-introduction": "Aquí puedes echar un vistazo a mis últimos proyectos.",
      "home-text":"Transformando ideas en código y código en soluciones. | Soy Marino, Desarrollador Web."
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
