import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';
import 'leaflet/dist/leaflet.css';

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

                    <h2><span>MY</span> CONTACT</h2>
                </div>
                <div className="contactContainer sectionContainer">

                    <div className='form-item'>
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

                    <div id='map'>
                        <iframe width="180%" height="425" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=60%25&amp;height=400&amp;hl=en&amp;q=Richmond%20HIll,%20NY+(Farai%20Major)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
                    </div>
                </div>

            </section >

        </div >
    )
}