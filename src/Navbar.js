import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="nb-into">
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhlK9hNvPFW45kUUGVmqQFXs0HBihMo8lb7pIgfxQ=s96-c-rg-br100" />
                <a href="#navbar">
                    <h3>Siddhartha Rusiya</h3>
                </a>
            </div>
            <div className="nb-desc">
                <a href="#about">
                <h3>About</h3>
                </a>
                <a href="#projects">
                <h3>Projects</h3>
                </a>
                <a href="#contact">
                <h3>Contact</h3>
                </a>
            </div>
        </div>
    )
}

export default Navbar
