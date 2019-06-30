import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return <>
    <nav>
      <button id='home' className='nav-link' onClick={props.changeActivePage}>Andrew Yin</button>
      <button id='about' className='nav-link' onClick={props.changeActivePage}>About</button>
      <button id='contact' className='nav-link' onClick={props.changeActivePage}>Contact</button>
    </nav>
  </>
}

export default Navbar;