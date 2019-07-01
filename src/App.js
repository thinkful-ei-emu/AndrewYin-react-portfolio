import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      active: 'home'
    }

    this.Pages = {
      'home': <Home />,
      'about': <About />,
      'contact': <Contact />
    }
  }

  changeActivePage = (e) => {
    console.log(e.target.id);
    this.setState({
      active: e.target.id
    });
  }

  render() {
    return (
      <div className='App'>
        <Navbar
          changeActivePage={this.changeActivePage}
          />
        <Hamburger
          changeActivePage={this.changeActivePage}        
        />
        <main>
          {this.Pages[this.state.active]}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
