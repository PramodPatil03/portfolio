import React from 'react'
import './contact.css'

import github from '../Images/Github.png'
import linkedin from '../Images/LinkedIn.png'
import phone from '../Images/Phone.png'
import gmail from '../Images/Gmail.png'

function Contact() {
  const contacts = [
    {
      name: 'GitHub',
      icon: github,
      link: 'https://github.com/PramodPatil03',
      label: '@PramodPatil03'
    },
    {
      name: 'LinkedIn',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/pramod-patil-768706282/',
      label: 'Pramod Patil'
    },
    {
      name: 'Email',
      icon: gmail,
      link: 'mailto:pramodpatil7058@gmail.com',
      label: 'pramodpatil7058@gmail.com'
    },
    {
      name: 'Phone',
      icon: phone,
      link: 'tel:+918970627081',
      label: '+91 89706 27081'
    }
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-underline"></div>
        </div>
        
        <p className="contact-intro">
          Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="contact-grid">
          {contacts.map((contact, index) => {
            const isExternalLink = contact.link.startsWith('http')
            return (
              <a 
                key={index} 
                target={isExternalLink ? '_blank' : undefined}
                href={contact.link} 
                className="contact-card"
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
              >
                <img className='contact-icon' src={contact.icon} alt={contact.name} />
                <div className="contact-info">
                  <h3 className="contact-name">{contact.name}</h3>
                  <p className="contact-label">{contact.label}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
