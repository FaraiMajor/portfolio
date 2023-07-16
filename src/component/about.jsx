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
                        <p>Hello, my name is Farai Mutukumira. I am a recent graduate of Brooklyn College, where
                            I earned my Bachelor's degree in Information Systems. I am a results-oriented and dedicated
                            software engineer with a strong foundation in information systems and full-stack web
                            development. Skilled in Java, Python, JavaScript, and various frameworks/libraries
                            such as Node.js, Express.js, and React.js. Recognized for spearheading successful
                            projects, including a WordPress website transition and the development of an e-commerce
                            platform. Committed to delivering efficient and innovative solutions while maintaining
                            a high level of code quality. Adept at collaborating with cross-functional teams and
                            passionate about leveraging technology to drive positive user experiences. </p>
                        <button>
                            <span>
                                <a href="https://drive.google.com/file/d/1PIeMgRqX4FJMsrjayNzNWKS_1gBeQKfi/view?usp=drive_link" target="blank">
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

