import React from 'react';
import './Contact.css'

function Contact() {
  return <>
    <section className='contact-section'>
      <header>
        <h1>Contact Me</h1>
      </header>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
      </form>
    </section>
  </>
}

export default Contact;