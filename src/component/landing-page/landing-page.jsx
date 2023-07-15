import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Stars from "../stars/stars";

import farai from '../../assets/farai.jpeg';
import "../landing-page/landing-page.scss"

export default function LandingPage() {

    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <img className="image" src={farai} />
                <Link to='/main'>
                    <button className="btn-el">ENTER SITE </button>
                    <main className="content" data-form-type="card">
                        <a href="faraimajor" className="btn">
                            <span className="btn__circle"></span>
                            <span className="btn__white-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                                    <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                                </svg>
                            </span>
                            <span className="btn__text">Enter Here!</span>
                        </a>
                    </main>
                </Link>
            </div>
            <Stars />
        </motion.div>
    );
}