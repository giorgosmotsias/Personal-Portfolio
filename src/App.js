//App.js is the main component of the app , here will set the structure of the app and add the rooting
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
          <div className="wrapper">
              <Header />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/experience" element={<Experience />} />
                      <Route path="/contact" element={<Contact />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
