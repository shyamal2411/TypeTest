import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingContainer/TypingContainer";
import "./TestContainer.css";
const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test-container">
      <div className="typing-challenge-container" data-aos="fade-up">
        <TypingChallengeContainer
          words={words}
          characters={characters}
          wpm={wpm}
        />
      </div>
      {/* <div className="try-again">
        <TryAgain words={words} characters={characters} wpm={wpm} />
    </div> */}
    </div>
  );
};

export default TestContainer;
