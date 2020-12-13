import React from "react";
import skincare from "./images/skincare.png";

class WorksSecond extends React.Component {
  render() {
    return (
      <div className="work-row">
        <h4 className="heading">Wordpress</h4>
        {}
        <div className="gallery">
          <img src={skincare} alt="Skincare+ wordpress screenshot" />
        </div>
        {}
        <div className="desc">
          <p>
            This is my first wordpress site customizing a previously created
            theme. I will be creating a custom theme soon!
          </p>
          <a href="http://www.nancym.ca/skincare/" target="_blank">
            Go to Site
          </a>
        </div>
      </div>
    );
  }
}

export default WorksSecond;