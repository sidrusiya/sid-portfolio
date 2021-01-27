import './App.css';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
