import React from "react";
import logo from "./images/n-logo0.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {}
        <img
          className="small-logo"
          src={logo}
          alt="n logo"
        />
        {}
        <h1 className="title">Nancy Ma</h1>
        {}
        <h2 className="sub-title">A Designer & Developer</h2>
        {}
        <h3 className="arrow-down">↓</h3>
      </div>
    );
  }
}

export default Header;