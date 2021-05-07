import React from "react";
import challengecard from "../ChallengeCard/ChallengeCard";
import "./TypingContainer.css";

const TypingChallengeContainer = ({ words, characters, wpm }) => {
  return (
    <div className="typing-container">
      {/* Details */}
      <div className="details-container">
        {/* words typed */}
       <challengecard cardName="words" cardValue={words}/>
        {/* characters typed */}
       <challengecard cardName="characters" cardValue={characters}/>
        {/* speed */}
       <challengecard cardName="speed" cardValue={wpm}/>
      </div>

      {/*Challenge */}
      <div className="typewriter-cpontainer">
          <p>This is real challenge</p>
      </div>
    </div>
  );
};

export default TypingChallengeContainer;