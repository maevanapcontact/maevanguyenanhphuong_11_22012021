import React, { Component } from "react";
import "../css/Dropdown.css";

class Dropdown extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="dropdown">
        <h3>
          {title}
          <span className="fas fa-chevron-up"></span>
        </h3>

        {Array.isArray(content) ? (
          <ul className="dropdown-list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="dropdown-list">{content}</p>
        )}
      </div>
    );
  }
}

export default Dropdown;
