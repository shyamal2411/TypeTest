import React from "react";
import "./ChallengeCard.css";

const  challengecard =({cardName, cardValue}) =>{
    return ( 
<div className="details-card-container">
    <div className="card-Name">{cardName}</div>
    <div className="card-Value">{cardValue}</div>
</div>
    );
}

export default challengecard;