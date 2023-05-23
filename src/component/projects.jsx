import React from "react";
import weather from '../assets/weatherranger.png';
import memories from '../assets/memories.png';
import tenzie from '../assets/tenzies.png'
import noteapp from '../assets/note-app.png'
import "../styles/projects.css"

export default function Projects() {
    return (
        <div id='projects'>
            <section className="projectSection" >
                <div className="sectionHead">
                    <h2><span>MY</span> PROJECTS</h2>
                </div>
                <div className="projectsContainer sectionContainer">
                    <article className="workBox">
                        <div className="imageContainer">
                            <img src={weather} alt="weather" />
                        </div>
                        <div className="describeContainer">
                            <h3>Weather Rangers</h3>
                            <h4>Technologies Used: <span className="techStack">React ,</span><span className="techStack">REST API ,</span><span className="techStack">NodeJS ,</span><span class="techStack">PostgresSQL</span></h4>
                            <ul>
                                <li>Completely built with PERN stack</li>
                                <li>Displays daily weather forecast for your current location using geotags </li>
                                <li>Allows users to create an account and save their favorite locations in their account</li>
                            </ul>
                            <div className="projectLinks">
                                <a href="https://weather-rangers-frontend.herokuapp.com/" className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/WeatherRangers_frontend" className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>
                    <article className="workBox">
                        <div className="imageContainer">
                            <img src={noteapp} alt="weather" />
                        </div>
                        <div className="describeContainer">
                            <h3>Note App</h3>
                            <h4>Technologies Used: <span className="techStack">React ,</span><span className="techStack">CSS</span></h4>
                            <ul>
                                <li>React app to make notes</li>
                                <li>Users can write, read, search, save and delete notes </li>
                                <li>App data is stored in localStorage</li>
                            </ul>
                            <div className="projectLinks">
                                <a href="https://faraimajor.github.io/note-app/" className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/note-app" className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>

                    <article className="workBox">
                        <div className="imageContainer">
                            <img src={memories} alt="memories" />
                        </div>
                        <div className="describeContainer">
                            <h3>Memoirs</h3>
                            <h4>Technologies Used: <span className="techStack">React ,</span><span className="techStack">REST API ,</span><span className="techStack">NodeJS ,</span><span class="techStack">MongoDB</span></h4>
                            <ul>
                                <li>Completely built with MERN stack</li>
                                <li>A social media app that allows users to post interesting events that happened in their lives.</li>
                                <li>App stores data usiong mongoDB</li>
                            </ul>
                            <div className="projectLinks">
                                <a href="https://github.com/FaraiMajor/memoirs" className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/memoirs" className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>

                    <article className="workBox">
                        <div className="imageContainer">
                            <img src={tenzie} alt="tenzie" />
                        </div>
                        <div className="describeContainer">
                            <h3>Tenzies Game</h3>
                            <h4>Technologies Used: <span className="techStack">React ,</span><span className="techStack">CSS</span></h4>
                            <ul>
                                <li>Dynamic game interface utilizing 10 interchangable colored dice</li>
                                <li>Integrated gaming mechanics enabling users to ‘roll the dice’ in consecutively timed rounds.</li>
                                <li>Game store data on best time, number of dice rolls in localStorage</li>
                            </ul>
                            <div className="projectLinks">
                                <a href="https://faraimajor.github.io/tenzies_game/" className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                                <a href="https://github.com/FaraiMajor/tenzies_game" className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}