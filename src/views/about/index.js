import React from "react";
import logo from "../../logo.svg";

function About() {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                This is simple example for using router :)
            </p>
            <p>
                Edit <code>src/views/about/index.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://github.com/Octanium91/react-app-route"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
        </>
    );
}

export default About;