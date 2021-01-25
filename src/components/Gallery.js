import React, { Component } from "react";
import "../css/Gallery.css";

class Gallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="gallery">
        <img src={images[0]} alt={`location`} />
        <span className="fas fa-chevron-left"></span>
        <span className="fas fa-chevron-right"></span>
      </div>
    );
  }
}

export default Gallery;
