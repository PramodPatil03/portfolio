import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

import hamburger from '../Images/hamburger.png'
import close from '../Images/close.png'

const navItems = [
    { path: '/', label: 'Portfolio' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About me' },
    { path: '/project', label: 'Project' },
    { path: '/contact', label: 'Contact' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

    // NavLink passes an isActive boolean in its className callback
    const getLinkClass = ({ isActive }) =>
        `nav-anchor font-white desktop-view${isActive ? ' selected' : ''}`

    return (
        <>
            <div className="nav-body">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path} className={getLinkClass}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                    <li className="mobile-view">
                        <img
                            className="nav-image"
                            onClick={toggleSidebar}
                            src={isOpen ? close : hamburger}
                            alt={isOpen ? 'Close menu' : 'Open menu'}
                        />
                    </li>
                </ul>
            </div>

            <div className="nav-body-mobile">
                {isOpen && (
                    <ul className="mobile-view">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={closeSidebar}
                                    className="nav-anchor font-white"
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Navbar