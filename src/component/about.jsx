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
                        I earned my Bachelor's degree in Information Systems. I have a strong passion for
                        technology and software development, and I'm always looking for ways to improve my skills
                        and stay up-to-date with the latest trends in the industry. I completed the
                        NYC Tech Talent Pipeline Web Development Residency program, where I learned and
                        developed full-stack web applications using various programming languages such as
                        Node.js, Express.js, React.js, and JavaScript. During the program, I participated
                        in numerous projects implementing my learnings, and developed skills. In my spare time, I enjoy working on personal projects, such
                        as developing games and social media apps, to further sharpen my skills. </p>
                </div>
            </section>
        </div>
    );
}

