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
          <p className="flash-logo-text">Type-test</p>
        </div>
        <div className="nav-right">
            <a 
            target="_blank"
            className="nav-sg-link"
            href="https://github.com/shyamal2411/"
            rel="roreferrer"
            >SG Prajapati</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
