import React, { Component } from "react";
import "../css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <a href="index.html">
          <img src="./images/logo.png" alt="Kasa" />
        </a>
        <ul>
          <li>
            <a href="index.html">Accueil</a>
          </li>
          <li>
            <a href="index.html">A propos</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
