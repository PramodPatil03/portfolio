import React from 'react'

import './about.css'
import pramod2 from '../Images/pramod-2.png'
import CardComponent from '../../Cards/CardComponent'
import TwoParamCardComponent from '../../Cards/TwoParamCardComponent'

function About() {
  return (
    <>
      <div className="container">
        <div className="info-holder font-white">
          <img src={pramod2} alt="Pramod" />
          <div className="info-holder-inner">
            <p style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Pramod Patil</p>
            <p style={{ fontSize: '1.4rem' }}><em>Jr. Software Engineer</em></p>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', paddingTop: '0.5rem' }}> Cognizant </p>
          </div>
        </div>
        <hr className='my-3'/>


        <div className="holder">
          <h2 className='rounded-20 font-white'>Education</h2>
          <hr />
          <CardComponent
            title="BE - CSE" 
            firstPara="Hirasugar Institute of Technology, Nidasoshi" 
            secondPara="CGPA : 7.98" 
          />
          <hr />
          <CardComponent 
            title="PUC - Science [P, C, M, B]" 
            firstPara="KLE's G I Bagewadi College, Nipani" 
            secondPara="Percentage: 81.5%" 
          />
          <hr />
          <CardComponent
            title="SSLC"
            firstPara="Koganoli High-School, Koganoli"
            secondPara="Percentage: 85.12%"
          />
        </div>
        <hr className='my-3'/>
        <div className="holder">
          <h2 className='rounded-20 font-white'>Technical Skills</h2>
          <hr />
          <TwoParamCardComponent
            title="Programming Languages"
            firstPara="Java, Javascript, Python"
          />
          <hr />
          <TwoParamCardComponent
            title="IT Constraints"
            firstPara="React js, Java Microservices, Spring Boot, Node js"
          />
          <hr />
          <TwoParamCardComponent
            title="Softwares familiar with"
            firstPara="V S Code, Eclipse, Jupyter Notebook, Pycharme, Android studio"
          />
        </div>
          <hr />
      </div>
    </>
  )
}

export default About
