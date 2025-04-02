import React from "react";
import "./Team.css"


function ContactCard({image, name, profession}) {

    return(
        <div className="single-member">
            <img src={image} alt="nkar"/>
            <h3>{name}</h3>
            <p className="prof">{profession}</p>
            <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
            <button>Contact</button>
        </div>
    )

}

export default ContactCard;