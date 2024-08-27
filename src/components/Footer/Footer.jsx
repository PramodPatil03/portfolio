import React from 'react'
import './footer.css'

import github from  '../Images/Github.png'
import linkedin from '../Images/LinkedIn.png'
import phone from '../Images/Phone.png'
import gmail from '../Images/Gmail.png'
import insta from '../Images/Insta.png'

function Footer() {
  return (
    <>
        <div className="footer-body">
            <ul>
                <li><a target='_blank' href="https://github.com/PramodPatil03"><img className='footer-img' src={github} alt="Github" /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/pramod-patil-768706282/"><img className='footer-img' src={linkedin} alt="LinkedIn" /></a></li>
                <li><a target='_blank' href="tel:/+918970607081"><img className='footer-img' src={phone} alt="Phone" /></a></li>
                <li><a target='_blank' href="mailto:pramodpatil190203@gmail.com"><img className='footer-img' src={gmail} alt="Gmail" /></a></li>
                <li><a target='_blank' href="https://www.instagram.com/_pramodpatil__24/"><img className='footer-img' src={insta} alt="Insta" /></a></li>
            </ul>
        </div>
    </>
  )
}

export default Footer
