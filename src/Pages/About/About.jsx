import React from "react";
import Members from "../../Components/ContactCard/ContactCard";
import './About.css'

function About() {
    return (
        <div id="About" className="about"> 
            <h2>About</h2>
            <div className="about-text">
                <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <Members/>
            </div>
        </div>
    )


}
export default About;