import React from "react";
import "../styles/header.css"

export default function Header() {
    return (
        <div className="navBar" id='home'>

            <ul className="navList">
                <li className="nav-name">
                    <a href="#home" id='farai'>Farai</a>
                </li>
                <li className="nav-item">
                    <a href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#projects">Projects</a>
                </li>

                <li className="nav-item">
                    <a href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

    )
}