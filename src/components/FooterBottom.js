import React from "react";
import logo from "./images/n-logo0.png";

class FooterBottom extends React.Component {
  render() {
    return (
      <div className="bottom-foot">
        <img className="small-logo" src={logo} alt="n logo" />
        <h6>Nancy Ma</h6>
      </div>
    );
  }
}

export default FooterBottom;