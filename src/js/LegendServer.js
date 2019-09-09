import React from 'react';
import '../styles/LegendServer.scss';

const LegendServer = () => (
    <div id="legend-server">
        <div id="business-card">
            <img id="headshot" src="images/headshot.jpg" className="circle-image" alt="headshot" />
            <br/>
            <span id="name">HI, I'M CHRIS WILSON,</span><br/>
            <span id="title">A WEB DEVELOPER</span><br/>
            <div id="social-bar">
                <div id="handle">LegendaryLinux</div>
                <div className="hr"/>
                <a href="https://twitter.com/LegendaryLinux" className="social-button">
                    <img src="images/twitter.png" className="circle-image"/>
                </a>
                <a href="https://www.linkedin.com/in/chris-wilson-12314458" className="social-button">
                    <img src="images/linkedin.png" className="circle-image"/>
                </a>
                <a href="https://github.com/LegendaryLinux" className="social-button">
                    <img src="images/github.png" className="circle-image"/>
                </a>
            </div>
        </div>
        <div id="other-projects">
            My Projects: <br />
            <a href="https://hamstertransfer.com/">Hamster Transfer</a><br />
            <a href="https://wiki.shorefirerealms.info/">The Shorefire Realms Wiki</a><br />
            <a href="https://github.com/LegendaryLinux/">More on GitHub</a>
        </div>
    </div>
);

export default LegendServer;