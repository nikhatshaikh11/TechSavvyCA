import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rx3gz2c', 'template_qkw0yrp', form.current, 'Xb6nr4HTYK8Sgk9Ek')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 className='contact-heading'>Tell us about the softwares you use at your CA firm or send us your suggestions for improving TechSavvyCA!</h5>
      <h2>Write to Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>zavian.in2020@gmail.com</h5>
              <a href="mailto:zavian.in2020@gmail.com">Send a message</a>
          </article>
        </div>
        
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Name / Firm's name" required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your teck-stack (softwares you use and for what purpose)' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
