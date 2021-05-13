import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";
const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted
}) => {
  return (
    <div className="challenge-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a speed test Now!
      </h1>
      <TestContainer
      selectedParagraph={selectedParagraph}
        timeRemaining={timeRemaining}
        words={words}
        characters={characters}
        wpm={wpm}
        timerStarted={timerStarted}
      />
    </div>
  );
};

export default ChallengeSection;
