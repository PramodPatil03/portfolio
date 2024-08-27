import React from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <HashRouter>
        <div className="main-container">
          <div className="inner-main-container">
            <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/about' element = {<About />}/>
                <Route exact path='/project' element = {<Project />}/>
                <Route exact path='/contact' element = {<Contact />}/>
              </Routes>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </>
  )
}

export default App
