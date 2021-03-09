import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Tag.css";

class Tag extends Component {
  render() {
    const { content } = this.props;

    return <div className="tag">{content}</div>;
  }
}

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
