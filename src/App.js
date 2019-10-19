import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/ProjectSection';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Hamburger />
        <Hero />
        <Navbar />

        <main className='content'>
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
