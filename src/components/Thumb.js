import React, { Component } from "react";
import "../css/Thumb.css";

class Thumb extends Component {
  render() {
    const { title, src } = this.props;

    return (
      <div className="thumb">
        <a href="index.html" title={title} className="thumb-link">
          <div className="thumb-cover"></div>
          <img src={src} alt={title} />
          <h2>{title}</h2>
        </a>
      </div>
    );
  }
}

export default Thumb;
