import React from 'react'
import './experience.css'

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <div className="section-underline"></div>
                </div>
                
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Dec 2025 - Present</div>
                            <h3 className="timeline-title">Jr. Software Engineer</h3>
                            <p className="timeline-company">Cognizant Technology Solutions</p>
                            <p className="timeline-description">
                                Being a part of Cognizant Technology Solutions, I am working as a Jr. Software Engineer and contributing to various projects. My main domain is Java which I have good grip on. I have worked on developing few MCP servers for the company. Apart from Java development I have spend lots of time in CICD configuration and deployments. Got recognized as fast learner and problem solver.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-date">Dec 2024 - Dec 2025</div>
                            <h3 className="timeline-title">Programmer Analyst Trainee</h3>
                            <p className="timeline-company">Cognizant Technology Solutions</p>
                            <p className="timeline-description">
                                Joined as a Programmer Analyst Trainee at Cognizant Technology Solutions. Even as a trainee, I have been able to contribute significantly to the projects and gain valuable experience in the field. A quick learner who learnt new technologies quickly and effectively contributed to the team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <h2 className="section-title">Key Projects</h2>
                    <div className="section-underline"></div>
                </div>
                
                <div className="project-card">
                    <h3 className="project-title">Spark Academy</h3>
                    <p className="project-description">
                        Spark Academy is a website which is designed to provide online education in affordable price to the rural students with great teaching and experienced faculties.
                    </p>
                    <a href="https://sparknds.in" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Spark Academy →
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default Experience
