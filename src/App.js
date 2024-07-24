import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

