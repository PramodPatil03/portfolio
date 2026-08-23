import React from 'react'
import CardComponent from '../../Cards/CardComponent'
import TwoParamCardComponent from '../../Cards/TwoParamCardComponent'

import './experience.css'

const Experience = () => {
    return (
        <div className="container font-white">
            <h1 id='title'>Experience</h1>
            <hr />
            <div className="holder">
                <CardComponent title={"Jr. Software Engineer"} firstPara={"Cognizant Technology Solutions"} secondPara={"Dec 2025 - Present"} description={"Being a part of Cognizant Technology Solutions, I am working as a Jr. Software Engineer and contributing to various projects. My main domain is Java which I have good grip on. I have worked on developing few MCP servers for the company. Apart from Java development I have spend lots of time in CICD configuration and deployments. Got recognized as fast learner and problem solver."} />
                <hr />
                <CardComponent title={"Programmer Analyst Trainee"} firstPara={"Cognizant Technology Solutions"} secondPara={"Dec 2024 - Dec 2025"} description={"Joined as a Programmer Analyst Trainee at Cognizant Technology Solutions. Even as a trainee, I have been able to contribute significantly to the projects and gain valuable experience in the field. A quick learner who learnt new technologies quickly and effectively contributed to the team."} />
            </div>
                <hr />
            <div className="ind-projects">
                <h2>Projects</h2>
                <CardComponent title={"Spark Academy"} firstPara={"Spark Academy is a website which is designed to provide online education in affordable price to the rural students with great teaching and experienced faculties. "} secondPara={<a href="https://sparknds.in" target="_blank" rel="noopener noreferrer" className='font-white'>Visit Spark Academy</a>} />

            </div>
        </div>
    )
}

export default Experience
