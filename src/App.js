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
  constructor(props) {
    super(props);

    this.state = {
      hasHover: true,
      lastTouchTime: 0
    };
  }

  componentDidMount() {
    // document.addEventListener('touchstart', this.updateLastTouchTime, true);
    document.addEventListener('touchstart', this.disableHover, true);
    document.addEventListener('mousemove', this.enableHover, true);
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.disableHover);
    document.removeEventListener('mousemove', this.enableHover);
  }

  enableHover = () => { 
    // if (new Date() - this.state.lastTouchTime < 500) return;
    if (this.state.hasHover) return;

    this.setState({
      hasHover: true
    });
  }
  disableHover = () => {
    if (!this.state.hasHover) return;

    this.setState({
      hasHover: false
    });
  }
  // updateLastTouchTime = () => {
  //   this.setState({
  //     lastTouchTime: new Date()
  //   });
  // }


  render() {
    return (
      <div className={'App' + (this.state.hasHover ? ' hasHover' : '')}>
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
