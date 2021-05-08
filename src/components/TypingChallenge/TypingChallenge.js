import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = (selectedParagraph) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">00:60</p>
        <p className="timer-info">START TYPING</p>
      </div>
      <div className="textarea-main">
        <div className="textarea-left">
           <div className="textarea test-paragraph">
            {selectedParagraph="Heyy"}
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
