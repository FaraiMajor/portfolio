import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import "../styles/header.css"

export default function Header() {
    return (
        <nav className="navBar" id='home'>
            <a href="#home" id='farai'>FARAI</a>
            <div className="navList">
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