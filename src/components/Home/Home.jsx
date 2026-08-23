import React from 'react'
import './home.css'

import pramod from '../Images/pramod.png'
import resume from '../Images/Java_Full_Stack_Pramod_Patil_AUG_2026.pdf'

function Home() {
  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="container-left font-white">
              <div className="intro">
                <p>Hey there, I am</p>
                <h2 id='name'>Pramod Patil</h2>
              </div>
              <div className="info">
                <p id="prof">I am a <span>Java Full stack Developer</span></p>
                <p id="desc"> An enthusiastic Software, Having good knowledge of Java, React and Python MCP servers. With around <strong>2 years of experience in Cognizant</strong>. Developing many Java applications and Python MCP servers with support of AI tools. </p>
              </div>
              <a className='nav-anchor font-black' target='_blank' href={resume}>Resume</a>
          </div>
          <div className="container-right">
              <img src={pramod} alt="Pramod" />
              <div className='quote'>
                <ul className='font-white'>
                  <li>Eat</li>|
                  <li>Code</li>|
                  <li>Sleep</li>|
                  <li>Repeat</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
