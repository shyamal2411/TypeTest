import React from "react";
import "./Main.css";
import flash from "./../../assets/hero.png";
// import Typewriter from "typewriter-effect";
import Typical from 'react-typical'

const Main = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                 <Typical
                 className="typewriter-color"
                  steps={['Correct?', 1000, 'Fast!', 1000, 'Quick?', 1000]}
                  loop={Infinity}
                  wrapper="p"
                    />
                </div>
            </div>
            
            <div className="landing-right">
                <img
                    data-aos="fade-left"
                    className="flash-image"
                    src={flash}
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default Main;