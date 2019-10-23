import React from 'react';
import './Hero.css';

function Hero(props) {
  return <>
    <header className='pageQuote'>
      <h1 className='heroQuote'>Hi, I&rsquo;m Andrew.</h1>
      <a href="#projects" className='heroLink'>
        See My Work
        <i className="material-icons-outlined rotate">arrow_forward</i>
      </a>
    </header>
    <div id='hero' className='hero'></div>
  </>;
}

export default Hero;