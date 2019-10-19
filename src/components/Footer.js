import React from 'react';
import './Footer.css';

function Footer() {
  return <>
    <footer>
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <p className='trademark'>Andrew Yin &copy;2019</p>
    </footer>
  </>;
}

export default Footer;