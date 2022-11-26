import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='z-0 h-screen overflow-scroll'>
        <Header />

        <section id='showcase'>
          <Showcase />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <Experience />
        </section>

        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
