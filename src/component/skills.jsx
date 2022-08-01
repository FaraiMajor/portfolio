import React from "react";

import '../styles/skills.css'

export default function Skills() {
    return (
        <section class="skillsSection" id="skills">
            <div class="sectionHead">
                <span>CHECK OUT MY</span>
                <h2>SKILLS</h2>
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
                            <i class="lni lni-nodejs-alt"></i>
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
                            <i class="lni lni-html5"></i>
                            <p>HTML5</p>
                        </div>
                    </li>
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-css3"></i>
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
                    <li>
                        <div class="itemContainer">
                            <i class="lni lni-discord"></i>
                            <p>Discord</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}