import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import resumeData from './resumeData';

function App() {
  return (
    <Router>
      <div className='z-0'>
        <Header resumeData={resumeData} />

        <section id='showcase'>
          <Showcase resumeData={resumeData} />
        </section>

        <section id='about'>
          <About resumeData={resumeData} />
        </section>

        <section id='experience'>
          <Experience resumeData={resumeData} />
        </section>

        <section id='skills'>
          <Skills resumeData={resumeData} />
        </section>

        <section id='project'>
          <Projects resumeData={resumeData} />
        </section>

        <section id='contact'>
          <Contact resumeData={resumeData} />
        </section>

        <a href='#showcase'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-end p-10'>
              <img
                className='h-7 w-7 cursor-pointer rounded-full grayscale filter hover:grayscale-0'
                src='/img/nicco.jpeg'
                alt='nicco'
              />
            </div>
          </footer>
        </a>
      </div>
    </Router>
  );
}

export default App;
