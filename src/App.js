import React, { useState , useEffect} from 'react';
// import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import './App.css';

function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <section id="home"><Home /></section> */}
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
      {/* add top up button */
        showButton && (
            <button className = "scroll-to-top" onClick={scrollToTop}>Top</button>
        )
      }
    </div>
  );
}

export default App;

