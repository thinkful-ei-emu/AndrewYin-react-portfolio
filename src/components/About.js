import React from 'react';
import './About.css';

function About() {
  return (
    <section id='aboutMe' className='aboutSection'>
      <h1 className='sectionHeader'>A Bit About Me</h1>
      <section>
        <p>I enjoy playing all kinds of games, from video games to tabletop games.</p>
        <p>I am a tea addict; my favorite goes back and forth between honey and yogurt green tea.</p>
        <p>I graduated with a B.S. in Mathematics from UCSD, but don’t ask me to do arithmetic.</p>
        <p>I am an aspiring web developer.</p>
      </section>
    </section>
  );
}

export default About;