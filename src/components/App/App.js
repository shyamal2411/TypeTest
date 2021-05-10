import React from "react";
import ReactDOM from "react-dom";
import Challenge from "../Challenge/ChallengeSection";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const TotalTime = 60;

class App extends React.Component {
  state = {
    selectedParagraph: "hey SG!",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0
  };
  render() {
    return (
      <div className="app">
        {/* Nav section */}
        <Navbar />
        {/* Landing section */}
        <Main />
        {/* Challenge section */}
        <Challenge
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
