import React, { Component } from "react";
import logo from "../../assets/logo.png";
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-left">
          <img 
          className="img-logo" 
          src={logo} 
          alt="logo" />
          <a 
            className="flash-logo-text"
            href="https://shyamal2411.github.io/TypeTest/"
            rel="roreferrer"
            >Type-Test</a>
        </div>
        <div className="nav-right">
            <a 
            target="_blank"
            rel="noreferrer"
            className="nav-sg-link"
            href="https://github.com/shyamal2411/"
            >SG Prajapati</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
