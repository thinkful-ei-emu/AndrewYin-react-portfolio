import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id='contactMe' className='contactSection'>
      <h1 className='sectionHeader'>Contact Me</h1>
      <form>
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email"  required/>
        <textarea placeholder="Message" />
        <input type='submit' value='Send' />
      </form>
    </section>
  );
}

export default Contact;