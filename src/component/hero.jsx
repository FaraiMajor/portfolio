import React from "react";
import BackgroundAnimation from "./backgroundAnimation";
import '../styles/hero.css'

export default function Main() {
    return (
        // header
        <div id='main'>
            <header>
                <div class="heroImageContainer">
                    <BackgroundAnimation />
                </div>
                <div className="aboutIntro">
                    <p className="greeting">HI THERE! I'M</p>
                    <p className="myname">FARAI MUTUKUMIRA</p>
                    <p className="statement">I write code</p>
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
        </div>
    )
}