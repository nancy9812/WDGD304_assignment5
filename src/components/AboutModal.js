import React from "react";
import Skills from "./Skills";

class AboutModal extends React.Component {
  render() {
    return (
      <div id="aboutModal" className="modal">
        {}
        <div className="modal-content">
          {}
          <span className="close">Close</span>
          <h2 className="sub-title">About Me</h2>
          <p>
            I am a third-year Web Design and Interactive Media student at Humber
            College North Campus.
          </p>
          <p>
            My hobbies include playing the guitar, listening to a variety of
            music, drawing, playing video games, watching anime/variety
            shows/dramas, and learning new languages along with their culture. I
            can speak English, Cantonese, and basic Mandarin. I am currently
            learning Japanese and Korean (at a slow pace for now).
          </p>
          <h2 className="sub-title">Skills</h2>
          <Skills></Skills>
        </div>
      </div>
    );
  }
}

export default AboutModal;
