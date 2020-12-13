import React from "react";
import logoguide from "./images/logo-design/four.png";
import logocard from "./images/logo-design/one.png";
import logoenvelope from "./images/logo-design/two.png";
import logoletter from "./images/logo-design/three.png";

class GalleryLarge extends React.Component {
  render() {
    return (
      <div className="gallery one-row">
        <div className="first">
          <img src={logoguide} alt="animal house logo guide" />
        </div>
        <div className="second">
          <img src={logocard} alt="animal house business card" />
          <img src={logoenvelope} alt="animal house envelope" />
        </div>
        <div className="third">
          <img src={logoletter} alt="animal house letterhead" />
        </div>
      </div>
    );
  }
}

export default GalleryLarge;