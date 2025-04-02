import React from "react";
import ContactCard from "./ContactCard";
import "./Team.css" 

const Contact = [
    { image: '/assets/TeamMembers/member1.jpg', name: "John Doe", profession: "CEO & Founder" },
    { image: '/assets/TeamMembers/member2.jpg', name: "Jane Doe", profession: "Architect" },
    { image: '/assets/TeamMembers/member3.jpg', name: "Mike Ross", profession: "Architect" },
    { image: '/assets/TeamMembers/member4.jpg', name: "Dan Star", profession: "Architect" }
]

function Members() {

    return (
        <div className="members">
            {Contact.map((contact, index) => {
                return (
                    <ContactCard key={index} name={contact.name} image={contact.image} profession = {contact.profession}/>
                );
            })}
        </div>
    );
}

export default Members;