import React from "react";
import '../styles/about.css'
import mypic from '../assets/faraivegas.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

export default function About() {
    return (
        // header

        <div className="aboutSection" id="about">
            <Zoom>
                <h1 className="aboutme"> <span>BIT</span> ABOUT ME</h1>
                <div className="aboutContainer">

                    <img src={mypic} alt="farai picture" className="image" />
                    <div className="right-side">
                        <h3>I'm Farai</h3>
                        <h4>Software Engineer</h4>
                        <p>Hello, my name is Farai Mutukumira. Welcome to my portfolio
                            website! I'm a technology enthusiast with a passion for solving
                            complex problems. With a strong interest in the fields of web
                            development, data science and software engineering , I enjoy
                            exploring their ever-evolving landscape. In my free time, you
                            can find me immersed in captivating books, challenging opponents
                            in chess matches, or pushing myself at the gym. I'm excited
                            to showcase my skills and experiences through my portfolio. </p>
                        <button>
                            <span>
                                <a href="https://www.linkedin.com/in/faraimutukumira/" target="blank">
                                    RESUME
                                    <FontAwesomeIcon icon={faArrowRight} color="black" className="icon" />
                                </a>
                            </span>
                        </button>
                    </div>
                </div>
            </Zoom>
        </div>


    );
}

