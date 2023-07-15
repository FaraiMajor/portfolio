import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
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
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        // header
        <div id='mainEl'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "black",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Zoom>
                <div className="aboutIntro">
                    <div className="textArea">
                        <p className="greeting">HI THERE! I'M</p>
                        <section className="myname">
                            <div className="wrapper nine">
                                <p className="rotate">
                                    <span className="rot">F</span>
                                    <span className="rot">a</span>
                                    <span className="rot">r</span>
                                    <span className="rot">a</span>
                                    <span className="rot">i</span>
                                </p>
                            </div>
                        </section>
                        <h2 className="into">
                            <span>I am into</span>
                            <div className="message">
                                <div className="word1">Web Dev</div>
                                <div className="word2">Creativity</div>
                                <div className="word3">Data Analytics</div>
                            </div>
                        </h2>

                        <button className="button">

                            <span>
                                <Link
                                    className="link"
                                    to="projects" spy={true}
                                    smooth={true} offset={-10}
                                    duration={500}
                                >
                                    PROJECTS
                                    <FontAwesomeIcon icon={faArrowDown} color="black" className="arrow" />
                                </Link>
                            </span>
                        </button>

                        <div className="socialsResume">

                            <ul className="socialsList">
                                <li>
                                    <a href="https://www.linkedin.com/in/faraimutukumira/" target="_blank" rel="noopener noreferrer"><i className="lni lni-linkedin-original" aria-label="Link to Farai's LinkedIn page."></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/FaraiMajor" target="_blank" rel="noopener noreferrer"><i className="lni lni-github-original" aria-label="Link to Farai's GitHub page."></i></a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/faraimajor" target="_blank" rel="noopener noreferrer"><i className="lni lni-instagram-original" aria-label="Link to Farai's Instagram profile."></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Zoom>
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
            </Zoom>
        </div >
    )
}
