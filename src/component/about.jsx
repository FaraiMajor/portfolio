import React from "react";
import '../styles/about.css'

export default function About() {
    return (
        // header
        <div>
            {/* about section */}
            <section class="aboutSection" id="about">
                <div class="sectionHead">

                    <h2> <span>BIT</span> ABOUT ME</h2>
                </div>
                <div className="aboutContainer sectionContainer">
                    <p>Software Developer and lifelong technology enthusiast,
                        I am a current senior and Tech Talent Pipeline resident at Brooklyn College pursuing a
                        Bachelor's degree in Information Systems. I graduated from Queensborough Community College
                        with an Associate of Science. I was selected to become a resident in Brooklyn College's Tech Talent Pipeline Program.
                        In this residency, I received the opportunity to work on various group projects using
                        Javascript, HTML5, CSS, React.js, Express.js, Node.js, Sequelize, PostgreSQL, Git, and GitHub.
                        I am passionate about coding and solving problems through code, and I am excited to work
                        alongside other amazing programmers and learn so much more! </p>
                </div>
            </section>
        </div>
    );
}

