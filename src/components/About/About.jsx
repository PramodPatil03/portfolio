import React from 'react'

import './about.css'
import pramod2 from '../Images/pramod-2.png'

function About() {
  return (
    <>
      <div className="container">
        <div className="info-holder font-white">
          <img src={pramod2} alt="Pramod" />
          <div className="info-holder-inner">
            <h2>Pramod Anil Patil</h2>
            <p>BE - Computer Science and Engineering</p>
          </div>
        </div>
        <hr className='my-3'/>

        <div className="holder">
          <h2 className='font-white'>Education</h2>
          <hr />
          <div className="sub-holder font-white">
            <h3>BE - CSE</h3>
            <p>Hirasugar Institute of Technology, Nidasoshi</p>
            <p>CGPA : 7.98</p>
          </div>
          <hr />
          <div className="sub-holder font-white">
            <h3>PUC - Science [P, C, M, B]</h3>
            <p>KLE's G I Bagewadi College, Nipani</p>
            <p>Percentage: 81.5%</p>
          </div>
          <hr />
          <div className="sub-holder font-white">
            <h3>SSLC</h3>
            <p>Koganoli High-School, Koganoli</p>
            <p>Percentage: 85.12%</p>
          </div>
          <hr />
        </div>
        <hr className='my-3'/>
        <div className="holder">
        <h2 className='font-white'>Technical Sklls</h2>
          <hr />
          <div className="sub-holder font-white">
            <h3>Programming Languages</h3>
            <p>Java, Javascript, Python</p>
          </div>
          <hr />
          <div className="sub-holder font-white">
            <h3>IT Constraints</h3>
            <p>React js, SQL, DBMS,Frontend, MongoDB, Android Development</p>
          </div>
          <hr />
          <div className="sub-holder font-white">
            <h3>Softwares familier with</h3>
            <p>V S Code, Eclipse, Jupyter Notebook, Pycharme, Android studio</p>
          </div>
          <hr />
        </div>
        
      </div>
    </>
  )
}

export default About
