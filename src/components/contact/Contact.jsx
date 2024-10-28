import React, {useRef} from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lwn5tth', 'template_jjhw1bm', form.current, {
        publicKey: 'iY-9ztdK13vTlCx6U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mjgstodomingo@gmail.com</h5>
            <a href="mailto:mjgstodomingo@gmail.com" target='_blank' rel='noreferrer'>Send Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>432-232-1931</h5>
            <a href="https://api.whatsapp.com/send?phone=14322321931" target='_blank' rel='noreferrer'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Full Name' id='name' required />
            <input type="text" name="email" placeholder='Email' id='email' required />
            <textarea name="message" rows="7" placeholder='Your Message' id='message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact