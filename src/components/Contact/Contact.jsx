import React from 'react'
import './contact.css'

import github from  '../Images/Github.png'
import linkedin from '../Images/LinkedIn.png'
import phone from '../Images/Phone.png'
import gmail from '../Images/Gmail.png'
import insta from '../Images/Insta.png'

function Contact() {
  return (
    <>
      <div className="container">
        <div className="cnt-container">
          <a target='_blank' href="https://github.com/PramodPatil03"><img className='contact-img' src={github} alt="Github" />Github</a>
          <a target='_blank' href="https://www.linkedin.com/in/pramod-patil-768706282/"><img className='contact-img' src={linkedin} alt="LinkedIn" />LinkedIn</a>
          <a target='_blank' href="tel:/+918970627081"><img className='contact-img' src={phone} alt="Phone" />Mobile</a>
          <a target='_blank' href="mailto:pramodpatil7058@gmail.com"><img className='contact-img' src={gmail} alt="Gmail" />Gmail</a>
          <a target='_blank' href="https://www.instagram.com/_pramodpatil__24/"><img className='contact-img' src={insta} alt="Insta" />Instagram</a>
        </div>
      </div>
    </>
  )
}

export default Contact
