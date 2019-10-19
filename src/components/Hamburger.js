import React from 'react';
import './Hamburger.css';


class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false
    };
  }

  openSideNav = () => {
    this.setState({
      sideNavOpen: true
    });
  }

  closeSideNav = () => {
    this.setState({
      sideNavOpen: false
    });
  }

  render() {
    return <>
      <span id='top-nav' className='top-nav'>
        <span className='hamburger' onClick={this.openSideNav}>
          <div className='hamburger-bar'></div>
          <div className='hamburger-bar'></div>
          <div className='hamburger-bar'></div>
        </span>
      </span>
      <nav id='sideNav' className={'side-nav' + (this.state.sideNavOpen ? ' nav-open' : '')}>
        <span className='nav-close' onClick={this.closeSideNav}>
          <button id='closeBtn' className='closeBtn' >&times;</button>
        </span>
        <a href='#hero' className='nav-link'>
          <button id='homeButton' onClick={this.closeSideNav}>Home</button>
        </a>
        <a href='#projects' className='nav-link'>
          <button id='projectsButton' onClick={this.closeSideNav}>Projects</button>
        </a>
        <a href='#aboutMe' className='nav-link'>
          <button id='aboutMeButton' onClick={this.closeSideNav}>About</button>
        </a>
        <a href='#contactMe' className='nav-link'>
          <button id='contactMeButton' onClick={this.closeSideNav }>Contact</button>
        </a>
      </nav>
    </>;
  }
}

export default Hamburger;