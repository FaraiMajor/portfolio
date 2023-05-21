import React from "react";
import {
    faCss3,
    faHtml5,
    faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import py from '../assets/python.svg'

import '../styles/skills.css'

export default function Skills() {
    return (
        <section class="skillsSection" id="skills">
            <div class="sectionHead">

                <h2><span>MY</span> SKILLS</h2>
            </div>

            <div class="skillsContainer sectionContainer">
                <ul class="skillsGrid">
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-react"></i>
                            <p>React</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <img src={py} width="25px" />
                            <p>Python</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            {/* <i class="lni lni-nodejs-alt"></i> */}
                            <FontAwesomeIcon icon={faNodeJs} color="#68A063" fontSize={30} />
                            <p>Node</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-javascript"></i>
                            <p>Javascript</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-git"></i>
                            <p>Git</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-github-original"></i>
                            <p>Github</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            {/* <i class="lni lni-html5"></i> */}
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" fontSize={25} />
                            <p>HTML5</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            {/* <i class="lni lni-css3"></i> */}
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" fontSize={25} />
                            <p>CSS</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-java"></i>
                            <p>Java</p>
                        </div>
                    </li>

                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-wordpress-filled"></i>
                            <p>Wordpress</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-npm"></i>
                            <p>NPM</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-dev"></i>
                            <p>Dev</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}