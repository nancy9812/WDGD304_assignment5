import React from "react";
import logoguide from "./images/logo-design/four.png";
import logocard from "./images/logo-design/one.png";
import logoenvelope from "./images/logo-design/two.png";
import logoletter from "./images/logo-design/three.png";

class GallerySmall extends React.Component {
  render() {
    return (
      <div className="gallery one-col">
        <div className="first">
          <img src={logoguide} alt="animal house logo guide" />
          <img src={logocard} alt="animal house business card" />
          <img src={logoenvelope} alt="animal house envelope" />
          <img src={logoletter} alt="animal house letterhead" />
        </div>
      </div>
    );
  }
}

export default GallerySmall;