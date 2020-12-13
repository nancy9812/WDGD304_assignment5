import React from "react";
import GallerySmall from "./GallerySmall";
import GalleryMedium from "./GalleryMedium";
import GalleryLarge from "./GalleryLarge";

class Works extends React.Component {
  render() {
    return (
      <div className="work-row">
        {}
        <h4 className="heading">Animal House Logo Design</h4>
        {}
        <GallerySmall></GallerySmall>
        {}
        <GalleryMedium></GalleryMedium>
        {}
        <GalleryLarge></GalleryLarge>
        {}
        <div className="desc">
          <p>
            This is one of my first logo design for an animal shelter. The
            images above show the style guide, business card, envelope sample,
            and a letterhead.
          </p>
        </div>
      </div>
    );
  }
}

export default Works;