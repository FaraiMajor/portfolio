import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import "../styles/header.css"

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navBar" id='home'>
            <a href="#home" id='farai'>FARAI</a>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={
                isNavExpanded ? "navList expanded" : "navList"
            }>
                <ul>
                    <li className="nav-item">
                        <Link className="link" to="about" spy={true} smooth={true} offset={-10} duration={500} >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="skills" spy={true} smooth={true} offset={-10} duration={500} >Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="projects" spy={true} smooth={true} offset={-10} duration={500} >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="contact" spy={true} smooth={true} offset={-10} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav >

    )
}