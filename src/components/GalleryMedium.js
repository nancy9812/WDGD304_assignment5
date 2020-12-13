import React from "react";
import logoguide from "./images/logo-design/four.png";
import logocard from "./images/logo-design/one.png";
import logoenvelope from "./images/logo-design/two.png";
import logoletter from "./images/logo-design/three.png";

class GalleryMedium extends React.Component {
  render() {
    return (
      <div className="gallery two-rows">
        <div className="first">
          <img src={logoguide} alt="animal house logo guide" />
          <img src={logocard} alt="animal house business card" />
        </div>
        <div className="second">
          <img src={logoenvelope} alt="animal house envelope" />
          <img src={logoletter} alt="animal house letterhead" />
        </div>
      </div>
    );
  }
}

export default GalleryMedium;