import React from "react";
import ReactDOM from "react-dom";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const TotalTime = 60;
const ServiceURL="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
class App extends React.Component {
  state = {
    selectedParagraph: "And there we gooooooooooo?",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
  };

  componentDidMount (){
        
       const selectedParagraphArray = this.state.selectedParagraph.split("");
      const testInfo = selectedParagraphArray.map(selectedLetter => {
        return{
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });
      this.setState({testInfo}); 
  }

  render() {
// console.log("Test Info- ", this.state.testInfo);
    return (
      <div className="app">
        {/* Nav section */}
        <Navbar />
        {/* Landing section */}
        <Main />
        {/* Challenge section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
