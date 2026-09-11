import React from 'react'
import './about.css'
import pramod2 from '../Images/pramod-2.png'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="profile-card">
          <div className="profile-image">
            <img src={pramod2} alt="Pramod Patil" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Pramod Patil</h3>
            <p className="profile-role">Jr. Software Engineer</p>
            <p className="profile-company">Cognizant</p>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Education</h3>
            <div className="education-list">
              <div className="education-item">
                <h4>BE - CSE</h4>
                <p>Hirasugar Institute of Technology, Nidasoshi</p>
                <span className="grade">CGPA: 7.98</span>
              </div>
              <div className="education-item">
                <h4>PUC - Science [P, C, M, B]</h4>
                <p>KLE's G I Bagewadi College, Nipani</p>
                <span className="grade">Percentage: 81.5%</span>
              </div>
              <div className="education-item">
                <h4>SSLC</h4>
                <p>Koganoli High-School, Koganoli</p>
                <span className="grade">Percentage: 85.12%</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-item">
                <h4>Programming Languages</h4>
                <p>Java, JavaScript, Python</p>
              </div>
              <div className="skill-item">
                <h4>Frameworks & Technologies</h4>
                <p>React.js, Java Microservices, Spring Boot, Node.js</p>
              </div>
              <div className="skill-item">
                <h4>Tools & Software</h4>
                <p>VS Code, Eclipse, Jupyter Notebook, PyCharm, Android Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
