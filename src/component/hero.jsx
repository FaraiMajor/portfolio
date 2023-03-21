import React from "react";
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
                        <FontAwesomeIcon icon={faNode} color='rgba(104, 160, 99)' />
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
                                <span>F</span>
                                <span>A</span>
                                <span>R</span>
                                <span>A</span>
                                <span>I</span>
                            </h3>
                        </div>
                    </h1>
                    <p className="statement">I write code</p>
                    <p className="quote"> “Make it work, make it right, make it fast.” – Kent Beck</p>
                </div>
                <div class="socialsResume">

                    <ul class="socialsList">
                        <li>
                            <a href="https://www.linkedin.com/in/faraimutukumira/" target="_blank" rel="noopener noreferrer"><i class="lni lni-linkedin-original" aria-label="Link to Farai's LinkedIn page."></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/FaraiMajor" target="_blank" rel="noopener noreferrer"><i class="lni lni-github-original" aria-label="Link to Farai's GitHub page."></i></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/faraimajor" target="_blank" rel="noopener noreferrer"><i class="lni lni-instagram-original" aria-label="Link to Farai's Instagram profile."></i></a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
