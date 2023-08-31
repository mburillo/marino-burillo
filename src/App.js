import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <AboutMe />
    <Portfolio/>
    <ContactForm />
    <Footer/>
    </>
  );
}

export default App;
