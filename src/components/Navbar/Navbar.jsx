import React, { useState } from 'react'
import './nav.css'

import hamburger from '../Images/hamburger.png'
import close from '../Images/close.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [one, setOne] = useState('nav-anchor font-white desktop-view'); 
    const [two, setTwo] = useState('nav-anchor font-white desktop-view'); 
    const [three, setThree] = useState('nav-anchor font-white desktop-view'); 
    const addSelectedClass = (id)=>{
        if(id === 'first'){
            setOne('nav-anchor font-white desktop-view')
            setThree('nav-anchor font-white desktop-view')
            setTwo('nav-anchor font-white desktop-view')
        }
        if(id === 'second'){
            setOne('nav-anchor font-white desktop-view selected')
            setThree('nav-anchor font-white desktop-view')
            setTwo('nav-anchor font-white desktop-view')
        }
        if(id === 'third'){
            setOne('nav-anchor font-white desktop-view')
            setTwo('nav-anchor font-white desktop-view selected')
            setThree('nav-anchor font-white desktop-view')
        }
        if(id === 'fourth'){
            setOne('nav-anchor font-white desktop-view')
            setTwo('nav-anchor font-white desktop-view')
            setThree('nav-anchor font-white desktop-view selected')
        }
    }

    const toggleSidebar = ()=>{
        const sideb = document.getElementById('sidebar');
        const menu = document.getElementById('menu');
        const cls = document.getElementById('close')
        const dis = sideb.style.display;
        if(dis === 'flex'){
            sideb.style.display = 'none';
            menu.style.display = 'block'
            cls.style.display = 'none'
        }else{
            sideb.style.display = 'flex';
            menu.style.display = 'none'
            cls.style.display = 'block' 
        }
    }
  return (
    <>
        <div className="nav-body">
            <ul>
                <li onClick={() => {addSelectedClass('first')}}><Link className='nav-anchor font-white' to="/">Portfolio</Link></li>
                <li id='second' onClick={() => {addSelectedClass('second')}}><Link className={one} to="/about">About me</Link></li>
                <li id='third' onClick={() => {addSelectedClass('third')}}><Link className={two} to="/project">Project</Link></li>
                <li id='fourth' onClick={() => {addSelectedClass('fourth')}}><Link className={three} to="/contact">Contact</Link></li>
                
                <li className='mobile-view'>
                    <img id='menu' className='nav-image' onClick={toggleSidebar} src={hamburger} alt="" />
                    <img id='close' className='nav-image' onClick={toggleSidebar} src={close} alt="" />    
                </li>
            </ul>
        </div>
        <div className="nav-body-mobile">
            <ul id='sidebar' className='mobile-view'>
                <li><Link  onClick={toggleSidebar}  className='nav-anchor font-white' to="/">Portfolio</Link></li>
                <li><Link onClick={toggleSidebar}  className='nav-anchor font-white' to="/about">About me</Link></li>
                <li><Link onClick={toggleSidebar}  className='nav-anchor font-white' to="/project">Project</Link></li>
                <li><Link onClick={toggleSidebar}  className='nav-anchor font-white' to="/contact">Contact</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
