import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  handleContactSubmit = () => {
    console.log('doesn\'t do anything for now');
  }

  render() {
    return (
      <section id='contactMe' className='contactSection'>
        <h1 className='sectionHeader'>Contact Me</h1>
        <form
          id='contactMeForm'
          onSubmit={this.handleContactSubmit}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" />
          <input type='submit' value='Send' />
        </form>
        <h3>or</h3>
        <section className='myInfoSection'>
          <p>Email me directly at: andrewyin1994@gmail.com</p>
          <div className='myStuffSection'>
            <a href="https://github.com/andrewyin1994" rel='noopener noreferrer' target='_blank' id='myGithubRepo'><img className='myStuff' src={require('../images/github.png')} alt='Github'></img></a>
            <a href="https://www.linkedin.com/in/andrew-yin-39a389128/" rel='noopener noreferrer' target='_blank' id='myLinkedIn'><img className='myStuff' src={require('../images/linkedin.png')} alt='LinkedIn'></img></a>
          </div>
        </section>

      </section>
    );
  }
}

export default Contact;