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
  // constructor() {
  //   super();

  //   this.state = {
  //     active: 'home',
  //     currentWidth: window.innerWidth
  //   };

  //   this.Pages = {
  //     'home': <Hero />,
  //     'about': <About />,
  //     'contact': <Contact />
  //   };
  // }


  // resize = () => {
  //   this.setState({
  //     currentWidth: window.innerWidth
  //   },
  //   console.log(this.state.currentWidth));
  // }

  // changeActivePage = (e) => {
  //   console.log(e.target.id);
  //   this.setState({
  //     active: e.target.id
  //   });
  // }

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
