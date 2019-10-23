import React from 'react';
import './About.css';

function About() {
  return (
    <section id='aboutMe' className='aboutSection'>
      <h1 className='sectionHeader'>A Bit About Me</h1>
      <section className='devSection'>
        <div className='devItem'>
          <i id='need4speed' className="material-icons-outlined md-60">
            speed
          </i>
          <div>
            <h3>Performant</h3>
            <p>Performance is always the top priority.</p>
          </div>
        </div>
        <div className='devItem'>
          <i id='hangman' className="material-icons-outlined md-60">
            phonelink
          </i>
          <div>
            <h3>Responsive</h3>
            <p>A layout for any device, mobile, tablet or desktop.</p>
          </div>
        </div>
        <div className='devItem'>
          <i id='t_pose' className="material-icons-outlined md-60">
            accessibility_new
          </i>
          <div>
            <h3>Accessible</h3>
            <p>User-friendly for all, regardless of condition.</p>
          </div>
        </div>
        <div className='devItem'>
          <i id='sam_fisher' className="material-icons-outlined md-60">
            group_work
          </i>
          <div>
            <h3>Collaborative</h3>
            <p>Teamwork makes the dream work.</p>
          </div>
        </div>

      </section>
      <section id='hobbySection'>
        <p>I enjoy playing all kinds of games, from video games to tabletop games.</p>
        <p>I am a tea addict; my favorite goes back and forth between honey and yogurt green tea.</p>
        <p>I graduated with a B.S. in Mathematics from UCSD, but don’t ask me to do arithmetic.</p>
      </section>
    </section>
  );
}

export default About;