import React from 'react';
import './About.css';
import Button from '@material-ui/core/Button';

function About() {
    return (
        <div className="about" id="about">
            <div className="ab-init">
                <h1>Hey 👏</h1>
                <h1>My Name is Siddhartha Rusiya. </h1>
                <h1>I'm a Student of NIT.</h1>
                <div className="box">
                <div className="btn">
                <Button variant="contained" color="primary" href="#contact">Hire Me</Button>
                </div>
                <div className="btn">
                <Button variant="outlined" color="primary" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1DsSfKvZeKmBc1mpGvFRpobgK-yXyj-fA/view?usp=sharing">View CV</Button>
                </div>
                </div>
                <div className="imid">
                <a href="https://www.linkedin.com/in/siddhartha-rusiya-79478a185/" target="_blank" rel="noreferrer">
                <img width="50" alt="linkedin" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"/>
                </a>
                <a href="https://github.com/sidrusiya" target="_blank" rel="noreferrer">
                <img width="50" alt="github" src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"/>
                </a>
                </div>
            </div>
            <div className="ab-im">
                <img alt="coding" src="https://img.icons8.com/cotton/2x/laptop-coding.png"/>
            </div>
        </div>
    )
}

export default About
