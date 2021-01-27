import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="fb-intro">
                <h3>Siddhartha Rusiya</h3>
                <h5>All rights reserved | 2021</h5>
            </div>
            <div className="fb-end">
                <a href="https://www.linkedin.com/in/siddhartha-rusiya-79478a185/" target="_blank">
                <img width="50" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"/>
                </a>
                <a href="https://github.com/sidrusiya" target="_blank">
                <img width="50" src="https://img.favpng.com/23/3/8/github-computer-icons-clip-art-png-favpng-CvXXq7gfsGZZJdnv1RK6GAXNk_t.jpg"/>
                </a>
            </div>
        </div>
    )
}

export default Footer
