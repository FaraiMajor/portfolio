import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div >
            <section class="contactSection" id='contact'>
                <div className="sectionHead">

                    <h2><span>MY</span> CONTACT</h2>
                </div>
                <div className="contactContainer sectionContainer">

                    <div className='form-item'>
                        <h3>Get in Touch <FontAwesomeIcon icon={faEnvelope} /></h3>
                        <div class="contactFormContainer">
                            <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                <label for="nameInput" className="srOnly"></label>
                                <input type="text" id="nameInput" name="nameInput" className="nameInput" required placeholder="Your Name*" />
                                <label for="emailInput" className="srOnly"></label>
                                <input type="email" id="emailInput" name="emailInput" className="emailInput" required placeholder="Your Email*" />
                                <label for="subjectInput" className="srOnly"></label>
                                <input type="text" id="subjectInput" name="subjectInput" className="subjectInput" required placeholder="Subject*" />
                                <label for="messageInput" className="srOnly"></label>
                                <textarea rows="7" cols="40" class="messageInput" name="messageInput" id="messageInput" required placeholder="Your Message*"></textarea>
                            </form>
                            <button type="submit" className="formSend" target="_blank" form="contactForm" rel="noopener noreferrer">SEND</button>
                        </div>
                    </div>

                    <div id='map'>
                        <iframe width="100%" height="425" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=425&amp;hl=en&amp;q=Google%20111%208th%20Ave,%20New%20York,%20NY%2010011+(Find%20me%20Here)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
                        {/* <iframe width="180%" height="425" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=60%25&amp;height=400&amp;hl=en&amp;q=Richmond%20HIll,%20NY+(Farai%20Major)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe> */}
                    </div>
                </div>
            </section >

        </div >
    )
}