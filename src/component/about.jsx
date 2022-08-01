import React from "react";
import '../styles/about.css'

export default function About() {
    return (
        // header
        <div id='main'>
            <header>
                <div class="heroImageContainer">
                    <img src="assets/images/me.jpg" alt="A picture of Farai Mutukumira." />
                </div>
                <div className="aboutIntro">
                    <p className="greeting">HI THERE! I'M</p>
                    <p className="myname">FARAI MUTUKUMIRA</p>
                    <p>I write code</p>
                    <p className="quote"> "Sometimes it's better to leave something alone, to pause, and that's very true of programming." - Joyce Wheeler</p>
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
            </header>

            {/* about section */}
            <section class="aboutSection" id="about">
                <div class="sectionHead">
                    <span>A LITTLE BIT</span>
                    <h2>ABOUT ME</h2>
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

