import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      active: 'home'
    }

    this.currentPage = {
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
        <main>
          {this.currentPage[this.state.active]}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
