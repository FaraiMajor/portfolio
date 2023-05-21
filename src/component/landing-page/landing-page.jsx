import React from "react";
import { Link } from "react-router-dom";
import farai from '../../assets/farai.jpeg';
import "../landing-page/landing-page.scss"

export default function LandingPage() {

    return (
        <div className="container">
            <img className="image" src={farai} />
            <Link to='/main'>
                <button className="btn-el">ENTER SITE </button>
                <main class="content" data-form-type="card">
                    <a href="faraimajor" class="btn">
                        <span class="btn__circle"></span>
                        <span class="btn__white-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                            </svg>
                        </span>
                        <span class="btn__text">Enter Here!!!</span>
                    </a>
                </main>
            </Link>
        </div>
    );
}