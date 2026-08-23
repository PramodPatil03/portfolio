import React from 'react'

import './project.css'
import CardComponent from '../../Cards/CardComponent'
function Project() {
  return (
    <>
      <div className="container font-white">
        <h1 id='title'>Projects - Others</h1>
        <hr />
        <div className="holder">
          {/* Simplify react */}
          <CardComponent
            title="Simplify - React"
            firstPara="Simplify is a project clone of a well known company's website which is developed in React js. This project was developed to showcase my front-end development skills using React js."
            secondPara={<a target='_blank' href="https://pramodpatil03.github.io/simplify-react/">Link to the project</a>}
          />
          <hr />
          {/* Signup and login */}
          <CardComponent
            title="Weather"
            firstPara="Weather is a frontend project which is developed in React and uses a free API to fetch the weather data. This enhances my knowledge on React js, fetching data from backend/API's and destructuring the API data as well."
            secondPara={<a target='_blank' href="https://pramodpatil03.github.io/weather/">Link to the project</a>}
          />
          <hr />
          {/* Weather */}
          <CardComponent
            title="Signup and Login"
            firstPara="A simple React webapp for Signing in and Login."
            secondPara={<a target='_blank' href="https://pramodpatil03.github.io/signuplogin/">Link to the project</a>}
          />
          <hr />
          {/* Simplify */}
          <CardComponent
            title="Simplify"
            firstPara="The same above simplify project which was developed in React js previosely developed in simple HTML, CSS and Javascript."
            secondPara={<a target='_blank' href="https://pramodpatil03.github.io/simplify/">Link to the project</a>}
          />
          <hr />
          {/* Portfolio */}
          <CardComponent
            title="Portfolio"
            firstPara="My own portfolio which is developed in React is another project developed by me to showcase my front end development skills. This was my old portfolio and now you are seeing at the modified version of same portfolio."
            secondPara={<a target='_blank' href="https://pramodpatil03.github.io/my-portfolio/">Link to the project</a>}
          />
        </div>
        <hr />

      </div>
    </>
  )
}

export default Project
