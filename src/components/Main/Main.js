import React from "react";
import "./Main.css";
import flash from '../../assets/hero.png'
const Main = () => {
    return (
        <div className="main-container">
        <div  data-aos="fade-right" className="landing-left">
            <h1 className="landing-header">
                Can you type?
            </h1>
            <div className="typeriter-container">
                <h1>Fast</h1>
                <h1>Correct?</h1>
                <h1>Quick?</h1>
            </div>
            <div 
            data-aos="fade-left"
             className="main-right">
                <img 
                src={flash} 
                className="hero-image" 
                alt="hero"

                />
            </div>
        </div>
        </div>
    );
};

export default Main;