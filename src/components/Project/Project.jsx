import React from 'react'

import './project.css'
function Project() {
  return (
    <>
      <div className="container font-white">
        <hr />
        <h1 id='title'>Projects - Others</h1>
        <hr />
        <div className="holder">
          {/* Simplify react */}
          <div className="sub-holder">
            <h3>Simplify - React</h3>
            <hr />
            <p>Simplify is a project clone of a well known company's website which is developed in React js. This project was developed to showcase my front-end development skills using React js.</p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/simplify-react/">Link to the project</a></p>
          </div>
          <hr />
          {/* Signup and login */}
          <div className="sub-holder">
            <h3>Weather</h3>
            <hr />
            <p>Weather is a frontend project which is developed in React and uses a free API to fetch the weather data. This enhances my knowledge on React js, fetching data from backend/API's and destructuring the API data as well.</p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/weather/">Link to the project</a></p>
          </div>
          <hr />
          {/* Weather */}
          <div className="sub-holder">
            <h3>Signup and Login</h3>
            <hr />
            <p>A simple React webapp for Signing in and Login. </p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/signuplogin/">Link to the project</a></p>
          </div>
          <hr />
          {/* Simplify */}
          <div className="sub-holder">
            <h3>Simplify</h3>
            <hr />
            <p>The same above simplify project which was developed in React js previosely developed in simple HTML, CSS and Javascript.</p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/simplify/">Link to the project</a></p>
          </div>
          <hr />

          {/* Text Utils */}
          <div className="sub-holder">
            <h3>Text_utils</h3>
            <hr />
            <p>Text utils was my first react project. Text utils is a textforms to play with word ie. Counting the words entered, number of characters in the text, converting them into upper-case or lower-case. In this project I learned the overall capability of react like reusing the same components, passing the props to another components, reusing props & accessing the props in the passes component.</p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/Text_utils/">Link to the project</a></p>
          </div>
          <hr />

          {/* Portfolio */}
          <div className="sub-holder">
            <h3>Portfolio</h3>
            <hr />
            <p>My own portfolio which is developed in React is another project developed by me to showcase my front end development skills. This was my old portfolio and now you are seeing at the modified version of same portfolio.</p>
            <p><a target='_blank' href="https://pramodpatil03.github.io/my-portfolio/">Link to the project</a></p>
          </div>
          <hr />
        </div>
        <hr />
        <h1 id='title'>Projects - Academic</h1>
        <hr />
        <div className="holder">
          <div className="sub-holder">
            <h3>RECNS</h3>
            <p>
              RECNS [Redundancy Elimination in Cloud Network Storage] is a cloud based system which is designed and developed to allocate cloud storage efficiently and eliminating the redundancy caused due to duplicate items in the cloud. This system allows users to upload, store and download their files on a private cloud that has this system implemented without causing any redundancy. This system uses convergent encryption technique to encrypt and check the duplication of the encrypted content of the file. Our System ensures the privacy and Security of the users data because unlike other system our does not check the actual content of the file instead it checks the encrypted content with the help of the hash key generated using the convergent encryption algorithm which will be same if the content which has been encrypted is same. Threfore the privacy of the user data will be maintained.
            </p>
            <p><a target='_blank' href="https://github.com/PramodPatil03/Data_deduplication">Link to the Github Repo</a></p>
          </div>
          <hr />
          <div className="sub-holder">
            <h3>You Vote</h3>
            <hr />
            <p>
              You Vote is an offline voting android app. This app is developed using java and XML in android studio. You vote designed to help small level voting systems that are still paper based. Our app is a prototype to help digitizing the voting system and to consume less paper material. This app helps to conduct the elections securely. The user needs to enter their epic number[Unique number on voting card] for identification and mobile number so that the user will get confirmation that their vote is submitted successfully. We made an attempt to secure the app as much as possible using the poling officer login and Admin login panels. Once the poling officer arrives at the polling station he has to login in the system so that voting procedure starts. Once the voting is finished the admin login has to made by the authority person. The admin panel will be having the total votes for each candidate and will announce the candidate as winner who is having highest votes. Suppose in case if two or more candidates get same votes the instead of declaring the winner the system will announce re-elections automatically.
            </p>
            <p><a target='_blank' href="https://github.com/PramodPatil03/you_vote">Link to the Github Repo</a></p>
          </div>
          <hr />
          <div className="sub-holder">
            <h3>Employee Management System  </h3>
            <hr />
            <p>
              Employee Management System [EMS] is a web application designed and developed using HTML, CSS and Javascript in Visual Studio Code. EMS is designed and developed to ease the work of the Employers in order to maintain the data of the employees and the companies overall activities. This system also helps the employees to maintain their routines with the company by logging in their account using the credentials provided by the company. The employeed can apply for leave, check their leave status, check their monthly salary and total bonuses and all. The employer can check which employee has applied for the leave and to whom to grant the leave. How much bonus an employee will get, reason of the leave and all.
            </p>
            <p><a target='_blank' href="https://github.com/PramodPatil03/employee_mgmnt">Link to the Github Repo</a></p>
          </div>
          <hr />
        </div>
        <hr />

      </div>
    </>
  )
}

export default Project
