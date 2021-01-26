import React, { Component } from "react";
import "../css/Dropdown.css";

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isOpen: prevState.isOpen ? false : true,
    }));
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="dropdown">
        <h3>
          {title}
          <span
            className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            onClick={() => this.toggleList()}
          ></span>
        </h3>

        {Array.isArray(content) ? (
          <ul
            className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}
          >
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}>
            {content}
          </p>
        )}
      </div>
    );
  }
}

export default Dropdown;
