import React from "react";
import './Contacts.css'
import map from './map.jpg'

function Contacts() {
    return (
        <div id="Contact" className="Contact">
            <h2>Contact</h2>
            <div>
                <p>Lets get in touch and talk about your next project.</p>
            </div>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <input type="text" placeholder="Comment"/>
                <button>SEND MESSAGE</button>
            </form>
            <div className="map">
                <img src={map} alt="map"/>
            </div>
            
        </div>
    );
}


export default Contacts;