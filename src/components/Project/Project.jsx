import React from 'react'
import './project.css'

const projects = [
  {
    title: "Simplify - React",
    description: "Simplify is a project clone of a well known company's website which is developed in React js. This project was developed to showcase my front-end development skills using React js.",
    link: "https://pramodpatil03.github.io/simplify-react/"
  },
  {
    title: "Weather",
    description: "Weather is a frontend project which is developed in React and uses a free API to fetch the weather data. This enhances my knowledge on React js, fetching data from backend/API's and destructuring the API data as well.",
    link: "https://pramodpatil03.github.io/weather/"
  },
  {
    title: "Signup and Login",
    description: "A simple React webapp for Signing in and Login.",
    link: "https://pramodpatil03.github.io/signuplogin/"
  },
  {
    title: "Simplify",
    description: "The same above simplify project which was developed in React js previosely developed in simple HTML, CSS and Javascript.",
    link: "https://pramodpatil03.github.io/simplify/"
  },
  {
    title: "Portfolio",
    description: "My own portfolio which is developed in React is another project developed by me to showcase my front end development skills. This was my old portfolio and now you are seeing at the modified version of same portfolio.",
    link: "https://pramodpatil03.github.io/my-portfolio/"
  }
]

function Project() {
  return (
    <section id="project" className="section project-section">
      <div className="project-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a 
                target='_blank' 
                href={project.link} 
                className="project-card-link"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
