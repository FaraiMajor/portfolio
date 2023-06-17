import React from "react";
import '../styles/about.css'

export default function About() {
    return (
        // header
        <div>
            {/* about section */}
            <section className="aboutSection" id="about">
                <div className="sectionHead">

                    <h2> <span>BIT</span> ABOUT ME</h2>
                </div>
                <div className="aboutContainer sectionContainer">
                    <p>Hello, my name is Farai Mutukumira. I am a recent graduate of Brooklyn College, where
                        I earned my Bachelor's degree in Information Systems. I am a results-oriented and dedicated
                        software engineer with a strong foundation in information systems and full-stack web
                        development. Skilled in Java, Python, JavaScript, and various frameworks/libraries
                        such as Node.js, Express.js, and React.js. Recognized for spearheading successful
                        projects, including a WordPress website transition and the development of an e-commerce
                        platform. Committed to delivering efficient and innovative solutions while maintaining
                        a high level of code quality. Adept at collaborating with cross-functional teams and
                        passionate about leveraging technology to drive positive user experiences. </p>
                </div>
            </section>
        </div>
    );
}

