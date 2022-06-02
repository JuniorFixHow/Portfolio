import React, {useRef} from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_062b3oh', 'template_i8tmcjd', form.current, 'f637W66c1SGCmhhMv' )

    e.target.reset();
  } 


  return (
    <section id = 'contact'>
      <h5>Get In touch</h5>
      <h2>Let's Talk</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>robertjuniorannan@gmail.com</h5>
            <a target='_blank' href="mailto:robertjuniorannan@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Annan Junior roberts</h5>
            <a target='_blank' href="https://m.me/robert.juniorannan.1">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+233541097145</h5>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=+233541097145">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}
// https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w
export default Contact