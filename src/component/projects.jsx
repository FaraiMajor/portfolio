import React from "react";
import weather from '../assets/weatherranger.png';
import memories from '../assets/memories.png';
import tenzie from '../assets/tenzies.png'
import "../styles/projects.css"

export default function Projects() {
    return (
        <div id='projects'>
            <section class="projectSection" >
                <div class="sectionHead">
                    <h2><span>MY</span> PROJECTS</h2>
                </div>
                <div className="projectsContainer sectionContainer">
                    <article class="workBox">
                        <div class="imageContainer">
                            <img src={tenzie} alt="tenzie" />
                        </div>
                        <div class="describeContainer">
                            <h3>Tenzies Game</h3>
                            <h4>Technologies Used: <span class="techStack">React</span>, <span class="techStack">API</span>, <span class="techStack">CSS</span></h4>
                            <ul>
                                <li>Dynamic game interface utilizing 10 interchangable colored dice</li>
                                <li>Integrated gaming mechanics enabling users to ‘roll the dice’ in consecutively timed rounds.</li>
                                <li>Game store data on best time, number of dice rolls in localStorage</li>
                            </ul>
                            <div class="projectLinks">
                                <a href="https://faraimajor.github.io/tenzies_game/" class="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/tenzies_game" class="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>
                    <article class="workBox">
                        <div class="imageContainer">
                            <img src={memories} alt="memories" />
                        </div>
                        <div class="describeContainer">
                            <h3>Memoirs</h3>
                            <h4>Technologies Used: <span class="techStack">React</span>, <span class="techStack">REST API</span>, <span class="techStack">NodeJS</span>, <span class="techStack">MongoDB</span></h4>
                            <ul>
                                <li>Completely built with MERN stack</li>
                                <li>A social media app that allows users to post interesting events that happened in their lives.</li>
                                <li>App stores data usiong mongoDB</li>
                            </ul>
                            <div class="projectLinks">
                                <a href="https://github.com/FaraiMajor/memoirs" class="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/memoirs" class="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>
                    <article class="workBox">
                        <div class="imageContainer">
                            <img src={weather} alt="weather" />
                        </div>
                        <div class="describeContainer">
                            <h3>Weather Rangers</h3>
                            <h4>Technologies Used: <span class="techStack">React</span>, <span class="techStack">REST API</span>, <span class="techStack">NodeJS</span>, <span class="techStack">PostgresSQL</span></h4>
                            <ul>
                                <li>Completely built with PERN stack</li>
                                <li>Displays daily weather forecast for your current location using geotags </li>
                                <li>Allows users to create an account and save their favorite locations in their account</li>
                            </ul>
                            <div class="projectLinks">
                                <a href="https://weather-rangers-frontend.herokuapp.com/" class="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/WeatherRangers_frontend" class="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}