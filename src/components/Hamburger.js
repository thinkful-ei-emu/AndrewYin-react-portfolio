import React from 'react';
import './Hamburger.css';

function openSideNav() {
  document.getElementById('sideNav').style.width = '200px';
}

function closeSideNav() {
  document.getElementById('sideNav').style.width = '0';
}

function Hamburger(props) {
  return <>
    <span id='navOpen' class='nav-open'>
      <span class='hamburger' onClick={openSideNav}>
        <div class='hamburger-bar'></div>
        <div class='hamburger-bar'></div>
        <div class='hamburger-bar'></div>
      </span>
    </span>
    <nav id='sideNav' className='side-nav'>
      <span class='nav-close' onClick={closeSideNav}>
        <button id='closeBtn' className='closeBtn' >&times;</button>
      </span>
      <button id='home' className='nav-link' onClick={props.changeActivePage}>Andrew Yin</button>
      <button id='about' className='nav-link' onClick={props.changeActivePage}>About</button>
      <button id='contact' className='nav-link' onClick={props.changeActivePage}>Contact</button>
    </nav>
  </>
}

export default Hamburger;