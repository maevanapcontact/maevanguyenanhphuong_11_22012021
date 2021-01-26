import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Thumb.css";

class Thumb extends Component {
  render() {
    const { title, src } = this.props;

    return (
      <div className="thumb">
        <Link to="/location" title={title} className="thumb-link">
          <div className="thumb-cover"></div>
          <img src={src} alt={title} />
          <h2>{title}</h2>
        </Link>
      </div>
    );
  }
}

Thumb.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Thumb;
