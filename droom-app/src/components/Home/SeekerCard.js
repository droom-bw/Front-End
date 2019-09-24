import React from "react";


export default function SeekerCard(props) {
    console.log("props", props);
    return (
        <div>
        <h2>Applicant: {props.item.name}</h2>
        <p>Location: {}</p>
        <p>Email: {}</p>
        <p>Resume: {}</p>
        </div>
    );
};