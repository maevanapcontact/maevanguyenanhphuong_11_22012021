import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Rate.css";

class Rate extends Component {
  render() {
    const { fill } = this.props;
    const starsClasses = [];

    for (let i = 0; i < 5; i++) {
      i < fill
        ? starsClasses.push("fas fa-star fill")
        : starsClasses.push("fas fa-star");
    }

    return (
      <div className="rate">
        {starsClasses.map((star, index) => (
          <span key={index} className={star}></span>
        ))}
      </div>
    );
  }
}

Rate.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default Rate;
