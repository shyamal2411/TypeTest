import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  startAgain
}) => {
  // console.log("Inside typing challenge- ",testInfo);
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">00:
        {timeRemaining >=10 ?timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
        {!timerStarted && "START TYPING"}
        </p>
      </div>
      <div className="textarea-main">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {selectedParagraph}
          </div>
        </div>

        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="Start Typing Here!"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
