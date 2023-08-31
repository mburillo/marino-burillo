import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <NavBar/>
    <AboutMe />
    <Portfolio/>
    <ContactForm />
    <Footer/>
    </>
  );
}

export default App;
