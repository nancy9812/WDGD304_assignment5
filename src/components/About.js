import React from "react";
import AboutModal from "./AboutModal";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        {}
        <button id="aboutBtn">About</button>
        {}
        <AboutModal></AboutModal>
        {}
      </div>
    );
  }
}

export default About;
