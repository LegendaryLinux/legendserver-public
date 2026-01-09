import React from 'react';
import './LegendServer.scss';

// Images
import headshot from './assets/static/headshot.jpg';
import linkedin from './assets/static/linkedin.png';
import github from './assets/static/github.png';

const LegendServer = () => (
    <div id="legend-server">
        <div id="business-card">
            <img id="headshot" src={headshot} className="circle-image" alt="headshot" />
            <br/>
            <span id="name">HI, I'M CHRIS WILSON,</span><br/>
            <span id="title">
                FULL-STACK WEB DEVELOPER<br />
                SOFTWARE ENGINEER
            </span>
            <br/>
            <div id="social-bar">
                <div id="handle">LegendaryLinux</div>
                <div className="hr"/>
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
            <a href="https://github.com/LegendaryLinux/AginahBot">AginahBot</a>
            <span className="bullet">•</span>
            <a href="https://archipelago.gg">Archipelago</a>
            <span className="bullet">•</span>
            <a href="https://dadjokeslideshow.com/">Dad Joke Slideshow</a>
            <span className="bullet">•</span>
            <a href="https://fractal.legendserver.info">Dragon Fractal</a>
            <span className="bullet">•</span>
            <a href="https://github.com/LegendaryLinux/">More on GitHub</a>
        </div>
    </div>
);

export default LegendServer;