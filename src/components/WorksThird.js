import React from "react";
import video from "./images/Assignment5-TheScene.mp4";

class WorksThird extends React.Component {
  render() {
    return (
      <div className="work-row">
        <h4 className="heading">Video Filming and Editing</h4>
        {}
        <div className="gallery">
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {}
        <div className="desc">
          <p>
            This is a first-year group project to recreate a short scene from
            the movie Scary Movie. My part in this project was the video and
            audio editing as well as lighting.
          </p>
        </div>
      </div>
    );
  }
}

export default WorksThird;