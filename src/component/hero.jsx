import React from "react";
import {
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {

    faCss3,
    faGitAlt,
    faJsSquare,
    faNode,
    faReact,
    faPython,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/hero.css';
import py from '../assets/python.svg';

export default function Main() {
    return (
        // header
        <div id='mainEl'>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNode} color='rgb(205, 132, 49)' />
                    </div>
                    <div className="face2">
                        <img src={py} width="180px" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

            <div className="aboutIntro">
                <div className="textArea">
                    <p className="greeting">HI THERE! I'M</p>
                    <h1 className="myname">
                        <div className="wrapper nine">
                            <h3 className="rotate">
                                <span className="rot">F</span>
                                <span className="rot">A</span>
                                <span className="rot">R</span>
                                <span className="rot">A</span>
                                <span className="rot">I</span>
                            </h3>
                        </div>
                    </h1>
                    <p className="statement">I write code</p>
                    <p className="quote"> “Make it work, make it right, make it fast.” – Kent Beck</p>
                </div>
                <div className="resume-item">
                    <a href="https://faraimajor.github.io/Farai-cisc3610/Labs/Resume/index.html" target="blank" rel="noopener noreferrer">Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#f7f7f8" /></a>
                </div>

            </div>

        </div>
    )
}
