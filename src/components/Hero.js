import React from 'react';
import './Hero.css';

function Hero(props) {
  return <>
    <header>
      <h1 className='pageQuote'>{'Hi, I\'m Andrew.'}</h1>
    </header>
    <div id='hero' className='hero'></div>
  </>;
}

export default Hero;