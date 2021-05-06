import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css"
const Challenge = ()=>{
    return (
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test Now!
            </h1>
            <TestContainer words={4} characters={14} wpm={20} />
        </div>
    );
}

export default Challenge;