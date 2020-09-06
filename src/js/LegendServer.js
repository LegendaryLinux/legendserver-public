import React from 'react';
import '../styles/LegendServer.scss';

// Images
import headshot from '../assets/static/headshot.jpg';
import twitter from '../assets/static/twitter.png';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';

const LegendServer = () => (
    <div id="legend-server">
        <div id="business-card">
            <img id="headshot" src={headshot} className="circle-image" alt="headshot" />
            <br/>
            <span id="name">HI, I'M CHRIS WILSON,</span><br/>
            <span id="title">A WEB DEVELOPER</span><br/>
            <div id="social-bar">
                <div id="handle">LegendaryLinux</div>
                <div className="hr"/>
                <a href="https://twitter.com/LegendaryLinux" className="social-button">
                    <img alt="Twitter Button" src={twitter} className="circle-image"/>
                </a>
                <a href="https://www.linkedin.com/in/chris-wilson-12314458" className="social-button">
                    <img alt="LinkedIn Button" src={linkedin} className="circle-image"/>
                </a>
                <a href="https://github.com/LegendaryLinux" className="social-button">
                    <img alt="GitHub Button" src={github} className="circle-image"/>
                </a>
            </div>
        </div>
        <div id="other-projects">
            My Projects: <br />
            <a href="https://github.com/LegendaryLinux/AginahBot">AginahBot</a><br />
            <a href="https://github.com/LegendaryLinux/MultiWorld-WebClient">MultiWorld-WebClient</a><br />
            <a href="https://github.com/LegendaryLinux/">More on GitHub</a>
        </div>
    </div>
);

export default LegendServer;