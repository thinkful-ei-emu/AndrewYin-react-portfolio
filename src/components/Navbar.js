import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      topNavOffset: window.innerHeight
    };

    window.addEventListener('scroll', this.handleScroll, true);
    window.onresize = () => {
      this.setState({
        topNavOffset: window.innerHeight
      });
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.onresize = null;
  }

  handleScroll = () => {
    if (window.pageYOffset >= this.state.topNavOffset) {
      this.setState({
        sticky: true
      });
    }
    else {
      this.state.sticky && this.setState({ sticky: false });
    }
  }

  render() {
    return (
      <nav id='navbar' className={'navbar' + (this.state.sticky ? ' sticky' : '')}>
        <a href='#hero'>
          <button className='nav-link'>Home</button>
        </a>
        <a href='#projects'>
          <button className='nav-link'>Projects</button>
        </a>
        <a href='#aboutMe'>
          <button className='nav-link'>About</button>
        </a>
        <a href='#contactMe'>
          <button className='nav-link'>Contact</button>
        </a>
      </nav>
    );
  }
}

export default Navbar;