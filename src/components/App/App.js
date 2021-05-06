import React from "react";
import ReactDOM from "react-dom";
import Challenge from "../Challenge/ChallengeSection";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Nav section */}
      <Navbar/>
        {/* Landing section */}
      <Main/>
        {/* Challenge section */}
      <Challenge/>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;
