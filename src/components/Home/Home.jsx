import React from 'react'
import './home.css'
import pramod from '../Images/pramod.png'
import resume from '../Images/Java_Full_Stack_Pramod_Patil_AUG_2026.pdf'

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <p className="greeting">Hey there, I am</p>
            <h1 className="name">Pramod Patil</h1>
            <h2 className="role">Java Full Stack Developer</h2>
            <p className="description">
              An enthusiastic Software Engineer with good knowledge of Java, React and Python MCP servers. 
              With around <strong>2 years of experience at Cognizant</strong>, developing Java applications 
              and Python MCP servers with support of AI tools.
            </p>
            <div className="cta-buttons">
              <a className="btn btn-primary" target='_blank' href={resume}>Download Resume</a>
              <a className="btn btn-secondary" href="#contact">Get in Touch</a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              <img src={pramod} alt="Pramod Patil" />
            </div>
            <div className="quote">
              <span>Eat</span>
              <span>Code</span>
              <span>Sleep</span>
              <span>Repeat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
