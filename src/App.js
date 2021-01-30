import './App.css';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import ContactForm from './ContactForm';
import CodingProfile from './CodingProfile'

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Project />
        <CodingProfile />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;
