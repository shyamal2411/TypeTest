import React from "react";
import ChallengeDetailsCard from "../ChallengeCard/ChallengeCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingContainer.css";

const TypingContainer = ({
       words,
    characters,
    wpm,
    selectedParagraph
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            <div className="typewriter-container">
               <TypingChallenge selectedParagraph= {selectedParagraph}/>
                {/* <TypingChallenge
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    onInputChange={onInputChange}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                /> */}
                {/* <p>This is Real Challenge</p> */}
            </div>
        </div>
    );
};

export default TypingContainer;