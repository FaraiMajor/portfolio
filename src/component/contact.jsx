import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import React, { useState } from "react";

import '../styles/contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ygt6ome', 'template_h2xqhi4', form.current, 'user_395Jt1KFJ2YEXjyLO06mT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id='contact'>
            <section class="contactSection" >
                <div class="sectionHead">
                    <span>LET'S CONNECT</span>
                    <h2>CONTACT</h2>
                </div>
                <div className="contactContainer sectionContainer">
                    <h3>Get in Touch</h3>
                    <div class="contactFormContainer">
                        <form id="contactForm" ref={form} onSubmit={sendEmail}>
                            <label for="nameInput" class="srOnly"></label>
                            <input type="text" id="nameInput" name="nameInput" class="nameInput" required placeholder="Your Name*" />
                            <label for="emailInput" class="srOnly"></label>
                            <input type="email" id="emailInput" name="emailInput" class="emailInput" required placeholder="Your Email*" />
                            <label for="subjectInput" class="srOnly"></label>
                            <input type="text" id="subjectInput" name="subjectInput" class="subjectInput" required placeholder="Subject*" />
                            <label for="messageInput" class="srOnly"></label>
                            <textarea class="messageInput" name="messageInput" id="messageInput" required placeholder="Your Message*"></textarea>
                        </form>
                        <button type="submit" class="formSend" target="_blank" form="contactForm" rel="noopener noreferrer">SEND</button>
                    </div>
                </div>
            </section>

        </div>
    )
}