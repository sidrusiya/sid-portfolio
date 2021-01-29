import React from 'react';
import './Contact.css';

function Contact() {
    
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <form action="mailto:siddhartharusiya84@gmail.com" method="post" encType="text/plain" className="fcon">
                <input type="text" placeholder="Full Name*" />
                <input type="text" placeholder="Email*" />
                <textarea rows="10" placeholder="Message*"></textarea>
                <button type="submit" className="btnc">Submit</button>
            </form>
        </div>
    )
}

export default Contact
